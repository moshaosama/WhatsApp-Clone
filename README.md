# WhatsApp Clone

This project is a clone of the popular messaging application **WhatsApp**, built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features
- Real-time chat using WebSockets (Socket.IO)
- User authentication and authorization
- One-to-one messaging
- Group chat support
- Media file sharing (images, videos, documents)
- Message status (sent, delivered, seen)
- User profiles and settings

## Tech Stack
- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.IO
- **Authentication:** JWT (JSON Web Tokens)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/moshaosama/whatsapp-clone.git
    ```
2. Install dependencies for both frontend and backend:
    ```bash
    cd WhatsApp-Clone
    cd frontend
    npm install
    cd ../backend
    npm install
    ```
3. Create a `.env` file in the backend directory with the following variables:
    ```env
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    SOCKET_PORT=5000
    ```
4. Run the backend server:
    ```bash
    npm run dev
    ```
5. Run the frontend:
    ```bash
    cd frontend
    npm start
    ```

## API Endpoints
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login user
- **GET /api/messages/:chatId** - Get messages by chat ID
- **POST /api/messages/send** - Send a new message
