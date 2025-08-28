import { Holiday, PrismaClient } from "@prisma/client";

import { IHoliday } from "../interfaces/holidays.interface";

const prisma = new PrismaClient();

class HolidayRepository {
    async add(userId: string, holidays: IHoliday[]): Promise<Holiday[]> {
        // Перевіряємо, чи існує користувач
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!existingUser) {
            // Створюємо користувача з дефолтними даними
            await prisma.user.create({
                data: {
                    id: userId,
                    name: `User_${userId}`,
                    email: `${userId}@example.com`,
                },
            });
        }

        // Додаємо свята
        await prisma.holiday.createMany({
            data: holidays.map((h) => ({
                date: h.date,
                localName: h.localName,
                name: h.name,
                countryCode: h.countryCode,
                userId,
            })),
        });

        // Повертаємо додані записи
        return prisma.holiday.findMany({
            where: {
                userId,
                name: { in: holidays.map((h) => h.name) },
            },
        });
    }
}

export const holidayRepository = new HolidayRepository();
