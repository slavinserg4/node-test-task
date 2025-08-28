import { NextFunction, Request, Response } from "express";

import { holidayService } from "../services/holiday.service";

class HolidayController {
    async addHolidays(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.params;
            const dto = req.body;

            const addedHolidays = await holidayService.addHolidays(userId, dto);

            res.status(201).json(addedHolidays);
        } catch (error) {
            next(error);
        }
    }
}

export const holidayController = new HolidayController();
