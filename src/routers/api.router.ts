import { Router } from "express";

import { availableCountryRouter } from "./available.countries.router";
import { CountryInfoRouter } from "./country.info.router";
import { holidayRouter } from "./holiday.router";

const router = Router();

router.use("/availableCountries", availableCountryRouter);
router.use("/countryInfo", CountryInfoRouter);
router.use("/users", holidayRouter);

export const apiRouter = router;
