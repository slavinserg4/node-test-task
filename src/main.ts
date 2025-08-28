/* eslint-disable no-console */

import express, { NextFunction, Request, Response } from "express";

import { config } from "./config/config";
import { ApiError } from "./errors/api.error";
import { apiRouter } from "./routers/api.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", apiRouter);
app.use(
    "*",
    (err: ApiError, req: Request, res: Response, next: NextFunction) => {
        const status = err.status || 500;
        const message = err.message ?? "Something went wrong";
        res.status(status).json({ status, message });
    },
);
process.on("uncaughtException", (err) => {
    console.log("uncaughtException", err);
    process.exit(1);
});

app.listen(config.PORT, () => {
    console.log(`Server listening on ${config.PORT}`);
});
