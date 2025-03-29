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
    npm install

## API Endpoints
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login user
- **GET /api/messages/:chatId** - Get messages by chat ID
- **POST /api/messages/send** - Send a new message
