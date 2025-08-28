import { Router } from "express";

import { holidayController } from "../controllers/holiday.controller";

const router = Router();

router.post("/:userId/calendar/holidays", holidayController.addHolidays);

export const holidayRouter = router;
