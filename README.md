# My Chat

## Introduction

A real-time chat application built with the **MERN stack** and **Socket.io**. It allows users to communicate instantly through text and supports file sharing such as images, videos, and audio. The system provides secure user authentication and authorization, along with both one-to-one and group chat functionality. An Admin Dashboard is included for managing users and monitoring activities, making the platform scalable and well-suited for community or organizational use.

---

### 🔑 Features

- Real-time messaging with Socket.io
- file like image, video, audio sharing
- Secure user authentication & authorization
- One-to-one and group chat support
- Admin Dashboard

---

## Technology Stack

### **Frontend**

- React.js
- Redux Toolkit
- Material UI
- Frammer Motion
- Chart js

### **Backend**

- Node.js & Express.js
- MongoDB & Mongoose
- JWT (Authentication & Authorization)

---

## Installation Guide

Follow these steps to set up locally.

### **Prerequisites**

- Node.js installed
- Code editor (e.g., VS Code)

---

### **Frontend Setup**

1. **Clone the repository**

   ```bash
   git clone https://github.com/md-suhag/my-chat-client.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd my-chat-client
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create environment variables**  
   Create a `.env` file in the frontend root directory and add:

   ```env
   VITE_SERVER=your_server_url   # e.g., http://localhost:3000
   ```

5. **Run the frontend**
   ```bash
   npm run dev
   ```

---

### **Backend Setup**

6. **Clone the backend repository**

   ```bash
   git clone https://github.com/md-suhag/my-chat-server.git
   ```

7. **Navigate to the server directory**

   ```bash
   cd my-chat-server
   ```

8. **Install dependencies**

   ```bash
   npm install
   ```

9. **Create environment variables**  
   Create a `.env` file in the server root directory and add:

```markdown
DB_URI= your_db_url
JWT_SECRET= your_secret
NODE_ENV = PRODUCTION
ADMIN_SECRET_KEY= your_admin_secret // this is for login in admin panel

CLIENT_URL =your_client_url

CLOUDINARY_CLOUD_NAME= your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

10. **Run the backend**
    ```bash
    npm run dev
    ```

---

## Demo credentials

username: User <br>
password: User5

---

## Thank You

Happy coding! 💻
