import { NextFunction, Request, Response } from "express";

import { countryDetailsService } from "../services/country.details.service";

class CountryInfoController {
    public async getCountryInfo(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const code = req.params.code;
            const result = await countryDetailsService.getAllAndMerge(code);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export const countryInfoController = new CountryInfoController();
