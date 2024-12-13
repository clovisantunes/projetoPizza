# Full-Stack Project - Next.js and Express

This project is a full-stack application using **Next.js** for the frontend and **Express.js** for the backend. It integrates modern tools and libraries for an efficient and scalable solution.

---

## Features

### Frontend
- Built with **Next.js 13** for server-side rendering and static site generation.
- **React Icons** for modern and intuitive UI elements.
- **React Toastify** for customizable toast notifications.
- Styled with **SCSS** for modular and maintainable styles.
- Session handling using **Nookies**.

### Backend
- Built with **Express.js** for a robust and lightweight server.
- Database management using **Prisma** ORM.
- Authentication secured with **JWT** and password hashing via **bcrypt.js**.
- File uploads implemented using **Multer**.
- Supports environment variables via **dotenv** for configuration.

---

## Technologies

### Frontend
- `axios`: HTTP client for API requests.
- `jwt-decode`: Decodes JSON Web Tokens.
- `next`: Framework for React applications.
- `nookies`: Cookie management for Next.js.
- `react`: Core library for building user interfaces.
- `react-dom`: React rendering library.
- `react-icons`: Icon set for React applications.
- `react-modal`: Accessible modal dialogs for React.
- `react-toastify`: Toast notifications library.
- `sass`: CSS preprocessor for styling.

### Backend
- `@prisma/client`: Prisma ORM for database access.
- `bcryptjs`: Library for hashing passwords.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Web framework for Node.js.
- `express-async-errors`: Error handling middleware for Express.
- `jsonwebtoken`: For generating and verifying JWTs.
- `multer`: Middleware for handling file uploads.

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A database compatible with Prisma (e.g., PostgreSQL, MySQL, SQLite)

### Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install Dependencies
For the frontend:

bash
Copiar código
cd frontend
npm install
For the backend:

bash
Copiar código
cd backend
npm install
Usage
Frontend
Navigate to the frontend directory.
Start the development server:
bash
Copiar código
npm run dev
Access the application at http://localhost:3000.
Backend
Navigate to the backend directory.
Run Prisma migrations:
bash
Copiar código
npx prisma migrate dev
Start the server:
bash
Copiar código
npm start
The backend will be available at http://localhost:5000.
Environment Variables
Create a .env file in the backend directory and add the following:

env
Copiar código
DATABASE_URL="your-database-connection-string"
JWT_SECRET="your-secret-key"
For the frontend, you can also create a .env.local file for environment-specific variables.

Scripts
Frontend
npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run start: Starts the production server.
Backend
npm start: Starts the server.
npm run dev: Starts the server in development mode.
npx prisma studio: Launches Prisma Studio for database management.
