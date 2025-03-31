
# IT Support Dashboard (MongoDB Edition)

A full-stack IT ticket management system built with **React**, **Node.js**, **Express**, and **MongoDB Atlas**. This dashboard allows IT teams to create and track support tickets in real-time, providing a clean and responsive UI with a robust backend API.

## 📌 Features

- 🔐 Create, view, and manage support tickets
- 🌐 Integrated with MongoDB Atlas (cloud database)
- ⚛️ React frontend with real-time UI updates
- 🚀 Express.js API and async Mongoose controllers
- 🧱 MVC architecture for clear project structure
- 🛠 Follows full Software Development Life Cycle (SDLC)

## 🛠 Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Mongoose)
- **Styling:** Basic inline styles (extendable)
- **Environment:** .env for secure DB connection
- **Architecture:** MVC

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/IT-Support-Dashboard.git
   ```

2. Navigate to the server folder and install dependencies:
   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file in the server folder:
   ```
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Start the backend server:
   ```bash
   node index.js
   ```

5. Navigate to the client folder and install dependencies:
   ```bash
   cd ../client
   npm install
   npm start
   ```

### API Endpoints

- `GET /api/tickets` – Fetch all tickets
- `POST /api/tickets` – Create a new ticket `{ description: "..." }`

## 🙋‍♂️ Author

**Sanskar Pardesi**  
[LinkedIn](https://www.linkedin.com/in/sanskarpardesi) | [GitHub](https://github.com/sppardesi75)
