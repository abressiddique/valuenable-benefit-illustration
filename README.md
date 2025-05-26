


# 🧮 Benefit Illustration Module

Welcome to the **Benefit Illustration Module**, a full-stack application built for **ValuEnable** to calculate and visualize insurance policy benefits. This project delivers a secure, scalable backend and a clean, responsive frontend, showcasing robust functionality and a professional UI. Designed to meet all assignment requirements, it’s ready to impress! 🚀

---

## 🎯 Project Overview

This application allows users to:
- **Register and log in** securely with JWT authentication.
- **Calculate policy benefits** with validated inputs (e.g., `sumAssured` ≥ ₹5,000,000).
- **View detailed policy illustrations** with year-wise benefit projections in a dynamic table.
- **Enjoy a responsive, user-friendly UI** powered by Bootstrap and custom CSS.

The project consists of two components:
- **Backend**: Node.js/Express with MongoDB for secure REST APIs.
- **Frontend**: React with Vite for a modern, interactive interface.

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Jest, Supertest
- **Dependencies**: `bcryptjs`, `jsonwebtoken`, `cors`, `dotenv`, `mongoose`

### Frontend
- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Bootstrap (via CDN), CSS
- **HTTP Client**: Axios
- **Routing**: React Router DOM

---

## 🌟 Key Features

### Backend
- **🔐 Secure Authentication**:
  - JWT-based login and protected routes.
  - Masked sensitive data (DOB, mobile) in MongoDB.
- **📊 Policy Calculation**:
  - Validates inputs (e.g., `sumAssured` ≥ ₹5,000,000, policy term > premium term).
  - Generates year-wise benefit projections.
- **📖 Data Masking**: Masks DOB and mobile for privacy (e.g., `****/12/12`, `******7890`).
- **🛡️ Robust Error Handling**: Clear error messages for invalid inputs or unauthorized access.
- **🧪 Unit Testing**: Comprehensive tests for validation, calculation, and APIs.

### Frontend
- **📈 Dynamic Illustration**:
  - Displays policy details and benefits in a responsive Bootstrap table.
- **🎨 Responsive UI**:
  - Bootstrap for cross-device compatibility.
  - Custom CSS for clean, professional styling.
- **🚦 Error Handling**: User-friendly feedback for invalid inputs and unauthorized access.

### Shared
- **🚀 Scalability**:
  - MongoDB sharding and indexing for large datasets.
  - Async processing and load balancing for backend performance.
  - Redis caching for frequent queries.

---

## 📦 Backend API Endpoints

The backend exposes the following REST APIs, all prefixed with `/api`:

| Method | Endpoint                          | Description                                                  | Request Body Example                                                                 | Response Example                                                                 |
|--------|-----------------------------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| POST   | `/api/auth/register`              | Registers a user with masked DOB and mobile.                 | ```json<br>{ "username": "testuser2", "password": "password123", "dob": "1999/12/12", "mobile": "1234567890" }<br>``` | ```json<br>{ "message": "User registered successfully" }<br>```                |
| POST   | `/api/auth/login`                 | Authenticates user and returns a JWT token.                   | ```json<br>{ "username": "testuser2", "password": "password123" }<br>```            | ```json<br>{ "token": "eyJhbGciOiJIUzI1NiIs..." }<br>```                      |
| POST   | `/api/policy/calculate`           | Calculates policy benefits with input validations.           | ```json<br>{ "dob": "1999/12/31", "gender": "M", "sumAssured": 5000000, "modalPremium": 40000, "premiumFrequency": "Yearly", "policyTerm": 18, "premiumPaymentTerm": 10 }<br>``` | ```json<br>{ "policy": { "_id": "68343fa5854f73f9d384d66b2", ... } }<br>``` |
| GET    | `/api/policy/illustration/:id`    | Retrieves policy details and benefits for the authenticated user. | N/A (URL param: `id`, e.g., `68343fa5854f73f9d38466b2`) | ```json<br>{ "_id": "68343fa5854f73f9d384d66b2", "dob": "1999/12/31", "benefits": [{ "year": 1, "projectedBenefit": 5042000 }, ...] }<br>``` |

### API Notes:
- **Authentication**: `/api/policy/*` endpoints require a JWT token in the `Authorization` header (`Bearer <token>`).
- **Error Responses**: Invalid requests return status codes (e.g., 400, 401, 403, 404) with JSON messages (e.g., `{"message": "Sum Assured must be at least ₹5000000"}`).
- **Data Masking**: DOB and mobile are masked in MongoDB for security.

---

## 📦 Project Structure

```
benefit-illustration/
├── benefit-illustration-backend/  # Node.js/Express backend
└── benefit-illustration-frontend/ # React/Vite frontend
```

Each folder includes a `README.md` with detailed setup and features.

---

## ⚙️ Setup Instructions

### Prerequisites
- **Node.js**: ≥ 14.x
- **MongoDB**: Running locally or cloud-based
- **Git**: For cloning the repository

### 1. Clone the Repository
```bash
git clone <repository-url>
cd benefit-illustration
```

### 2. Backend Setup
```bash
cd benefit-illustration-backend
npm install
```

Create a `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/benefit-illustration
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend:
```bash
npm run dev
```
- Runs at: [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup
```bash
cd ../benefit-illustration-frontend
npm install
```

Start the frontend:
```bash
npm run dev
```
- Runs at: [http://localhost:5173](http://localhost:5173)

### 4. Test the Application
- **Register**: Create a user at `http://localhost:5173/register`.
- **Login**: Authenticate at `http://localhost:5173/login`.
- **Calculate Policy**: Input details at `http://localhost:5173/policy`.
- **View Illustration**: See benefits at `http://localhost:5173/illustration/:policyId`.

---

## 🧪 Testing

### Backend
```bash
cd benefit-illustration-backend
npm test
```
- Tests validation, benefit calculation, and API endpoints (success, failure, edge cases).

### Frontend
- Manual testing via UI:
  - Verify `sumAssured` errors (e.g., < ₹5,000,000).
  - Test invalid tokens or policy IDs.
- Automated tests can be added with Jest/React Testing Library (optional).

---

## ✅ Achievements & Fixes

- **Fixed `jwt is not defined`**: Corrected `jsonwebtoken` import for robust authentication.
- **Implemented `sumAssured` Validation**: Ensured `sumAssured` ≥ ₹5,000,000 with clear error messages.
- **Optimized Performance**: Used MongoDB `.lean()` and indexing for faster queries.
- **Responsive UI**: Leveraged Bootstrap for a professional, device-friendly interface.
- **Comprehensive Testing**: Backend unit tests for all core logic and endpoints.

---

## 📈 Scalability Plan

- **Database**:
  - **Sharding**: Partition MongoDB by `userId`.
  - **Indexing**: On `userId`, `policyId` for fast reads.
- **Backend**:
  - **Async Processing**: Non-blocking I/O with async/await.
  - **Load Balancing**: Multiple Node.js instances.
  - **Caching**: Redis for frequent API calls.
- **Frontend**:
  - Lazy loading for components.
  - Optimized API requests with Axios interceptors.
- **Monitoring**:
  - Logging with Winston.
  - Metrics with Prometheus/Grafana.

---

## 🌄 Screenshots

### 🔐 Login Page
![Screenshot 2025-05-26 165637](https://github.com/user-attachments/assets/82c5c6a5-44d8-479a-907a-b5fd75c3dd64)

### Register Page
![Screenshot 2025-05-26 165647](https://github.com/user-attachments/assets/5e0d2f37-12c3-4514-a2fe-4cb19533180d)

### Calculate Policy Page
![Screenshot 2025-05-26 165703](https://github.com/user-attachments/assets/e7ce85d7-a268-4d6f-98a9-4379411eaf76)

### 📊 Policy Illustration
![Screenshot 2025-05-26 165749](https://github.com/user-attachments/assets/468635eb-fe55-4a70-932a-ccaca4c665b2)
![Screenshot 2025-05-26 165755](https://github.com/user-attachments/assets/b776a9cc-2f1a-426f-a9ed-c573ac87c9ff)
![Screenshot 2025-05-26 165804](https://github.com/user-attachments/assets/937b8367-c392-40cb-b6b3-61c21da12fac)

---

## 📬 Submission

- **Author**: Abres Siddique
- **Date**: May 26, 2025
- **Contact**: [abressiddique@gmail.com](mailto:abressiddique@gmail.com)


---

## 📄 License

This project is for evaluation purposes only and not intended for production use.

---

Thank you for reviewing my submission! I’m excited to showcase my full-stack skills and contribute to ValuEnable’s mission. Reach out at [abressiddique@gmail.com](mailto:abressiddique@gmail.com) with any feedback! 😊
```
