export interface ICountryInfoEnded {
    country: string;
    borders: string[];
    population: PopulationEntry[];
    flag: string;
}
////////
export interface IBorderResponse {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders?: IBorderResponse[];
}
////////
export interface IFlagResponse {
    error: boolean;
    msg: string;
    data: IFlag;
}
export interface IFlag {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
}
////////
export interface IPopulationData {
    country: string;
    populationCounts: PopulationEntry[];
}

export interface IPopulation {
    error: boolean;
    msg: string;
    data: { country: string; populationCounts: PopulationEntry[] };
}
export interface PopulationEntry {
    year: string;
    value: number;
}
