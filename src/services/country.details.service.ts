import { StatusCodesEnum } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import { ICountryInfoEnded } from "../interfaces/сountry.details.interface";
import { countryDetailsRepository } from "../repositories/country.details.repository";

class CountryDetailsService {
    public async getAllAndMerge(code: string): Promise<ICountryInfoEnded> {
        const countryInfo =
            await countryDetailsRepository.getCountryInfoByCode(code);
        if (!countryInfo) {
            throw new ApiError("Country not found", StatusCodesEnum.NOT_FOUND);
        }
        const population = await countryDetailsRepository.getPopulation(
            countryInfo.commonName,
        );
        if (!population) {
            throw new ApiError("Country not found", StatusCodesEnum.NOT_FOUND);
        }
        const countryFlag = await countryDetailsRepository.getCountryFlag(
            countryInfo.commonName,
        );
        if (!countryFlag) {
            throw new ApiError("Country not found", StatusCodesEnum.NOT_FOUND);
        }

        const borders = countryInfo.borders.map((border) => border.commonName);
        return {
            country: countryInfo.officialName,
            borders,
            population: population.populationCounts,
            flag: countryFlag.flag,
        };
    }
}
export const countryDetailsService = new CountryDetailsService();
