
# 🎨 Benefit Illustration Module - Frontend

This is the **frontend** of the Benefit Illustration Module, a full-stack application developed for **ValuEnable** to simulate and visualize insurance policy benefits. It provides a clean, user-friendly interface built with **React** and **Vite**, allowing users to register, calculate policy benefits, and view detailed illustrations.

---

## ⚙️ Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Bootstrap, CSS
- **State Management**: React Context API / useState
- **HTTP Client**: Axios

---

## 🖥️ Pages & Features

- **Login / Register Page**: Secure JWT authentication.
- **Policy Calculation Page**:
  - Form inputs with validation.
  - Displays calculated benefit projections.
- **Illustration Page**:
  - Fetches and displays benefits by `policyId`.

---

## 🔧 Setup Instructions

### 1. Navigate to Frontend Directory
```bash
cd benefit-illustration-frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

> Frontend runs at: [http://localhost:5173](http://localhost:5173)
> Backend expected at: [http://localhost:5000](http://localhost:5000)

---

## 🌐 Base API Configuration (Axios)

To streamline API calls, all requests use a pre-configured Axios instance in:

```js
// src/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
```

### ✅ Benefits:

* Automatically attaches JWT token from localStorage.
* Makes testing secure endpoints seamless.
* Centralized control of base URL.

---

## 🔐 Authentication Flow

* Register/Login to receive a **JWT**
* Token is stored in `localStorage`
* All protected API calls include `Authorization: Bearer <token>` via Axios interceptor

---

## 🧪 Features Summary

* ✅ Responsive UI (Bootstrap)
* ✅ Form validation & feedback
* ✅ JWT token-based login flow
* ✅ Policy benefit projection and rendering
* ✅ Error handling for invalid/unauthorized access

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


## 📦 Build for Production

```bash
npm run build
```

The final static site will be in the `dist` folder.

---

## 📬 Submission

**Author**: Abres Siddique
**Date**: May 26, 2025
**Contact**: [abressiddique@gmail.com](mailto:abressiddique@gmail.com)



---

## 📄 License

This project is intended for demo and evaluation purposes only.

```


