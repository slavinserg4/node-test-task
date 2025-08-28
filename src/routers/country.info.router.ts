import { Router } from "express";

import { countryInfoController } from "../controllers/country.info.controller";

const router = Router();

router.get("/:code", countryInfoController.getCountryInfo);

export const CountryInfoRouter = router;
