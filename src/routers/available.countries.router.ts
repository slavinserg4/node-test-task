import { Router } from "express";

import { availableCountryController } from "../controllers/available.country.controller";

const router = Router();

router.get("/", availableCountryController.getAll);

export const availableCountryRouter = router;
