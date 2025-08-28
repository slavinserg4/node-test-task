import { IAvailableCountry } from "../interfaces/available.country.interface";
import { availableCountryRepository } from "../repositories/available.country.repository";

class AvailableCountryService {
    public async getAll(): Promise<IAvailableCountry[]> {
        return await availableCountryRepository.getAll();
    }
}
export const availableCountryService = new AvailableCountryService();
