
# 🧮 Benefit Illustration Module - Backend

This is the **backend** for the **Benefit Illustration Module**, a full-stack application built for **ValuEnable** to calculate and display insurance policy benefits. It offers secure, scalable REST APIs for user authentication, policy benefit calculation, and policy illustration retrieval.

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Jest, Supertest
- **Dependencies**:
  - `bcryptjs` – Password hashing  
  - `jsonwebtoken` – Token-based authentication  
  - `cors`, `dotenv`, `mongoose`

---

## 📦 API Endpoints

| Method | Endpoint                          | Description                                                  |
|--------|-----------------------------------|--------------------------------------------------------------|
| POST   | `/api/auth/register`              | Registers a user with **masked DOB** and **masked mobile**. |
| POST   | `/api/auth/login`                 | Authenticates user and returns a **JWT token**.             |
| POST   | `/api/policy/calculate`           | Calculates policy benefits with **input validations**.       |
| GET    | `/api/policy/illustration/:id`    | Retrieves **policy details and benefits** for the user.      |

---

## 🔐 Features

- **Authentication**: JWT-based secure login & route protection.
- **Data Masking**: Masks sensitive data like **DOB** and **mobile** in MongoDB.
- **Input Validations**:
  - `sumAssured` must be ≥ ₹5,000,000
  - Validations for age, policy term, premium payment term, etc.
- **Benefit Calculation**: Projects **year-wise benefits** over policy term.
- **Robust Error Handling**: Handles invalid inputs and unauthorized access.
- **Unit Testing**: Test coverage for core logic and endpoints.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd benefit-illustration-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```
MONGO_URI=mongodb://localhost:27017/benefit-illustration
JWT_SECRET=your_jwt_secret
PORT=5000
```

> Ensure MongoDB is running locally or provide a cloud-based URI.

### 4. Run the Server (Development)

```bash
npm run dev
```

Server starts at: [http://localhost:5000](http://localhost:5000)

---

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Test Coverage

* Validation logic: Ensures correct input formats and limits.
* Calculation logic: Verifies benefit projections.
* API responses: Includes success, failure, and edge cases (e.g., invalid tokens or IDs).

---

## 📈 Scalability Plan

### Database

* **Sharding**: Partition MongoDB collections by `userId` for distributed scaling.
* **Indexing**: Index `userId` and `policyId` for optimized read performance.

### Backend

* **Async/Await**: Non-blocking I/O for better performance.
* **Load Balancing**: Run multiple Node.js instances behind a load balancer.
* **Caching**: Use Redis to cache frequent policy illustration queries.

### Monitoring

* **Logging**: Integrate `Winston` or similar for structured logging.
* **Metrics**: Use tools like `Prometheus` + `Grafana` for tracking performance.

---

## ✅ Known Fixes & Notes

* ✅ Fixed: `jwt is not defined` – resolved by correctly importing `jsonwebtoken`.
* ✅ Implemented validation for `sumAssured` ≥ ₹5,000,000 with proper error handling.
* ✅ Optimized MongoDB queries using `.lean()` for lightweight reads.

---

## 📬 Submission

**Author**: Abres Siddique
**Date**: May 26, 2025
**Contact**: [abressiddique@gmail.com](mailto:abressiddique@gmail.com)

**Instructions**: Zip the folder `benefit-illustration-backend` and submit it along with the frontend project folder.

---

## 📄 License

This project is for evaluation purposes only and not intended for production use.
