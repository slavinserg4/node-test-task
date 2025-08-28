export interface IHoliday {
    date: string;
    localName: string;
    name: string;
    countryCode: string;
    userId: string;
}
export interface IAddHolidaysDto {
    countryCode: string;
    year: number;
    holidays?: string[];
}
