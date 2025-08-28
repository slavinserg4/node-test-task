import axios from "axios";

import { config } from "../config/config";
import { StatusCodesEnum } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import { IAvailableCountry } from "../interfaces/available.country.interface";

class AvailableCountryRepository {
    public async getAll(): Promise<IAvailableCountry[]> {
        try {
            const response = await axios.get<IAvailableCountry[]>(
                config.AVAILABLE_COUNTRIES,
            );
            return response.data;
        } catch {
            throw new ApiError(
                "Failed to fetch available countries",
                StatusCodesEnum.BED_REQUEST,
            );
        }
    }
}
export const availableCountryRepository = new AvailableCountryRepository();
