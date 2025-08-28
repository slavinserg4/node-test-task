import axios from "axios";

import { config } from "../config/config";
import { StatusCodesEnum } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import {
    IBorderResponse,
    IFlag,
    IFlagResponse,
    IPopulation,
    IPopulationData,
} from "../interfaces/сountry.details.interface";

class CountryDetailsRepository {
    public async getCountryInfoByCode(code: string): Promise<IBorderResponse> {
        try {
            const response = await axios.get<IBorderResponse>(
                `${config.BORDER_COUNTRIES}/${code.toUpperCase()}`,
            );
            return response.data;
        } catch {
            throw new ApiError("Country not found", StatusCodesEnum.NOT_FOUND);
        }
    }

    public async getPopulation(country: string): Promise<IPopulationData> {
        try {
            const response = await axios.post<IPopulation>(
                config.POPULATION_DATA,
                { country },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            return response.data.data;
        } catch {
            throw new ApiError("Country not found", StatusCodesEnum.NOT_FOUND);
        }
    }

    public async getCountryFlag(country: string): Promise<IFlag> {
        try {
            const response = await axios.post<IFlagResponse>(
                config.FLAG,
                { country },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            return response.data.data;
        } catch {
            throw new ApiError("Country not found", StatusCodesEnum.NOT_FOUND);
        }
    }
}

export const countryDetailsRepository = new CountryDetailsRepository();
