import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../enums/status-codes.enum";
import { availableCountryService } from "../services/available.country.service";

class AvailableCountryController {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const countries = await availableCountryService.getAll();
            res.status(StatusCodesEnum.OK).json(countries);
        } catch (e) {
            next(e);
        }
    }
}

export const availableCountryController = new AvailableCountryController();
