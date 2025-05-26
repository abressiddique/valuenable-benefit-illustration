
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

> *Add relevant screenshots here (e.g., login, calculation form, benefit table/chart, etc.)*

Example:

```md
### 🔐 Login Page
![Login Screenshot](screenshots/login.png)

### 📊 Illustration Result
![Illustration Screenshot](screenshots/illustration.png)
```

Place images in a `/screenshots` folder in the root of your project.

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


