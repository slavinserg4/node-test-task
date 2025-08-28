import axios, { AxiosResponse } from "axios";

import { StatusCodesEnum } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import { IAddHolidaysDto, IHoliday } from "../interfaces/holidays.interface";
import { holidayRepository } from "../repositories/holidays.repository";

class HolidayService {
    async addHolidays(
        userId: string,
        dto: IAddHolidaysDto,
    ): Promise<IHoliday[]> {
        const { countryCode, year, holidays } = dto;

        let response: AxiosResponse<any>;
        try {
            response = await axios.get(
                `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
            );
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                throw new ApiError(
                    `No holidays found for year ${year} and country ${countryCode}`,
                    StatusCodesEnum.NOT_FOUND,
                );
            }

            throw new ApiError(
                `Failed to fetch holidays: ${error.message || "Unknown error"}`,
                StatusCodesEnum.BED_REQUEST,
            );
        }

        let fetchedHolidays: IHoliday[] = response.data.map((h: any) => ({
            date: h.date,
            localName: h.localName,
            name: h.name,
            countryCode,
            userId,
        }));

        if (holidays && holidays.length > 0) {
            fetchedHolidays = fetchedHolidays.filter((h) =>
                holidays.includes(h.name),
            );
        }

        return holidayRepository.add(userId, fetchedHolidays);
    }
}

export const holidayService = new HolidayService();
