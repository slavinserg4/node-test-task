import dotenv from "dotenv";

dotenv.config();

interface IConfig {
    AVAILABLE_COUNTRIES: string;
    BORDER_COUNTRIES: string;
    POPULATION_DATA: string;
    FLAG: string;
    PORT: string;
}

const config: IConfig = {
    AVAILABLE_COUNTRIES: process.env.AVAILABLE_COUNTRIES,
    BORDER_COUNTRIES: process.env.BORDER_COUNTRIES,
    POPULATION_DATA: process.env.POPULATION_DATA,
    FLAG: process.env.FLAG,
    PORT: process.env.PORT,
};

export { config };
