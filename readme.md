
# Project Name

## Overview

Brief description of the project.

## Project Structure

- `frontend`: Vue.js frontend application.
- `backend`: Node.js Nest.js backend application.
- `shared-orm-library`: Shared ORM library with Node.js, Nest.js, PostgreSQL, and ORM (Knex or Objection).

## Setup Instructions

### Frontend (Vue.js)

1. Navigate to the `frontend/` directory:
   
   cd frontend/

2. Install dependencies:
   
   npm install

3. Start the development server:
   
   npm run start
   
### Backend (Node.js, Nest.js)

1. Navigate to the `backend/` directory:
   
   cd backend/
   

2. Install dependencies:
   
   npm install
   

3. Start the development server (assuming you have a start script in your `package.json`):
   
   npm run start
   

### Shared ORM Library (Node.js, Nest.js, PostgreSQL, ORM)

1. Navigate to the `shared-orm-library/` directory:
   
   cd shared-orm-library/
   

2. Install dependencies:
   
   npm install
   

3. Additional setup steps specific to your ORM library (Knex or Objection) and PostgreSQL configuration.

### Database Migrations (Using Knex.js)

#### Running Migrations

1. Ensure your PostgreSQL database is properly configured and accessible.

2. Navigate to the `shared-orm-library/` directory:
   
   cd shared-orm-library/
   

3. Run migrations to update your database schema:
   
   npx knex migrate:latest
   
   This command will execute all pending migrations located in the `migrations/` folder.

#### Creating a New Migration

To create a new migration file, use the following command:
   
   npx knex migrate:make migration_name
   
   Replace `migration_name` with a descriptive name for your migration. This will generate a new migration file in the `migrations/` folder.

#### Update .env file
DB_TYPE='postgres'
DB_HOST='localhost'
DB_PORT=5432
DB_USER=''
DB_PASSWORD=''
DB_DATABASE=''
DB_DEBUG=0