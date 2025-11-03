# 💻 Server Side Languages

## 📚 Node.js Coding Assignment - Book API (CRUD)

> _App Last Updated: Nov 2, 2025_

## Project Name: WDP2 Portfolio Project

### Phillip Cantu

🆔 &nbsp; 0005394162

📪 &nbsp; <pvcantu@student.fullsail.edu>

![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)

## 🚀 Project Overview

I built a simple **in-memory Book API** using:

- **Node.js**
- **Express.js**
- **RESTful routing**
- **In-memory data storage** (an array of books)

This is a **Node.js + Express** REST API that lets you **create, read, update, and delete books**.

---

### 🌍 API Endpoints

#### (Base URL: `http://localhost:5000/api/v1/books`)

| Method   | URL    | Description                            |
| -------- | ------ | -------------------------------------- |
| `GET`    | `/`    | Get **all books**                      |
| `GET`    | `/:id` | Get **one book by ID**                 |
| `POST`   | `/`    | **Add a new book**                     |
| `PUT`    | `/:id` | **Update a book by ID** (full replace) |
| `DELETE` | `/:id` | **Delete a book by ID**                |

> **Root URL**: `http://localhost:5000/` → returns `"Service is up"` (actuator/health check)

---

## 🛠️ How to Run It

1. Clone the repo:

```bash
git clone https://github.com/CantuPhillip-FS/nodejs-coding-assignment.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

4. Open [Postman](https://www.postman.com/) (or your preferred API platform ) and test!

## 🎥 Demo + Explanation Video

👉 [https://youtu.be/vlakrmwS_SU](https://youtu.be/vlakrmwS_SU)

## 📂 Project Structure

```text
/
├── server.js              → Main server entry
├── src/
│   ├── index.js           → Express app setup
│   └── routes/
│       ├── index.js       → Base API routes
│       └── bookRoutes.js  → All book CRUD logic
├── package.json
└── .env.example
```

## 🔗 Links

GitHub Repo: [github.com/CantuPhillip-FS/nodejs-coding-assignment](https://github.com/CantuPhillip-FS/nodejs-coding-assignment)

Demo Video: [youtube.com/watch?v=vlakrmwS_SU](https://youtube.com/watch?v=vlakrmwS_SU)
