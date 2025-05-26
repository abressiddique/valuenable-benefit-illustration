```markdown
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

- **🔐 Secure Authentication**:
  - JWT-based login and protected routes.
  - Masked sensitive data (DOB, mobile) in MongoDB.
- **📊 Policy Calculation**:
  - Validates inputs (e.g., `sumAssured`, policy term > premium term).
  - Generates year-wise benefit projections.
- **📈 Dynamic Illustration**:
  - Displays policy details and benefits in a responsive Bootstrap table.
- **🎨 Responsive UI**:
  - Bootstrap for cross-device compatibility.
  - Custom CSS for clean, professional styling.
- **🧪 Robust Testing**:
  - Backend unit tests for validation, calculation, and APIs.
  - Frontend error handling for invalid inputs and unauthorized access.
- **🚀 Scalability**:
  - MongoDB sharding and indexing for large datasets.
  - Async processing and load balancing for backend performance.
  - Redis caching for frequent queries.

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
- Tests validation, benefit calculation, and API endpoints.

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

###  RegisterPage
![Screenshot 2025-05-26 165647](https://github.com/user-attachments/assets/5e0d2f37-12c3-4514-a2fe-4cb19533180d)

### calculate Policy Page 
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
