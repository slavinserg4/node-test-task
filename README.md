# Country Info App - Back-End JS Engineer Test Assessment

This is a small backend application built with **Node.js, Express, and TypeScript** that provides country information and allows adding national holidays to a user's calendar.

---

## 📌 Tech Stack

- Node.js + Express.js
- TypeScript
- SQLite (Prisma ORM)
- Axios (for external API requests)
- ESLint + Prettier (code quality)

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/country-info-app.git
cd country-info-app

### 2. Install dependencies
npm install

### 3.Set up environment variables. Create a .env file in the project root:
DATABASE_URL="file:./dev.db"
PORT=3000
AVAILABLE_COUNTRIES=
BORDER_COUNTRIES=
POPULATION_DATA=
FLAG=

### 4. Run database migrations
npx prisma migrate dev --name init

### 5. Start the application
npm start

---

## API Endpoints

### 1. Get Available Countries
GET /availableCountries

### 2. Get Country Info
GET /countryInfo/:countryCode

### 3. Add National Holidays to User's Calendar
POST /users/:userId/calendar/holidays

Request Body:
{
    "countryCode": "US",
    "year": 2025,
    "holidays": ["New Year's Day", "Independence Day"]
}


If the user does not exist, they will be created automatically.

Fetches holidays from Nager.Date API and filters them if a list is provided.

Saves selected holidays in the user's calendar.



---






