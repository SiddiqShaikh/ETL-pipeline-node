# Countries ETL Pipeline

This project implements an ETL (Extract, Transform, Load) pipeline that fetches country data from the REST Countries API, processes it, and stores it in a PostgreSQL database. It also provides a RESTful API to query the stored data.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up PostgreSQL database and update the `.env` file with your database URL.

3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

## API Endpoints

### Get Countries
- `GET /api/data` - Retrieve all countries
- Query Parameters:
  - `page`: Page number (default: 1)
  - `limit`: Records per page (default: 10)
  - `region`: Filter by region
  - `name`: Filter by country name

Example:
```
GET /api/data?page=1&limit=10&region=Europe
```

## Running Tests
```bash
npm test
```

## ETL Pipeline

The ETL pipeline runs automatically:
- On application startup
- Daily at midnight (scheduled via node-cron)

To run the ETL pipeline manually:
```bash
npm run etl
```