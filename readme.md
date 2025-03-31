# StrideDo - Modern Todo Application 🚀  

![StrideDo Demo]([screenshot\homepage.png](https://github.com/ranjankr73/StrideDo/blob/main/screenshot/homepage.png))

**StrideDo** is a feature-rich todo application designed for seamless task management, robust authentication, and an exceptional user experience.

---

## 📌 Table of Contents  
- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Installation](#installation)  
- [API Documentation](#api-documentation)  
- [Screenshots](#screenshots)  
- [Future Roadmap](#future-roadmap)  
- [License](#license)  

---

## 🌟 Features  

### **Task Management**  
✅ **Create, Edit, Delete Tasks**  
✅ **Mark Tasks as Complete/Incomplete**  
✅ **Task Attributes**:  
  - Title & Description  
  - Due Dates with DateTime Picker  
  - Priorities (Low / Medium / High)  

### **Organization & Search**  
🔹 **Advanced Sorting**:  
  - Due Date (Soonest First and Latest First)  
  - Priority (High → Low)  
  - Creation Date (Newest First and Oldest First)  
🔹 **Smart Filtering**:  
  - By Status (Active / Completed / Overdue)  
  - By Priority Level (High / Medium / Low)  
🔹 **Search Functionality**:  
  - Full-text search in titles/descriptions
🔹 **Category/Labels**:
  - Create task with category/labels(eg.: Work, Personal etc.)

### **Visual Enhancements**  
🎨 **Overdue Tasks Highlighting**  
  - Red border indicators  
  - Dedicated "Active", "Completed" and "Overdue" section  
  - Dedicated Category/Labels section
🎨 **Premium UI**  
  - Dark/Light mode toggle  
  - Responsive design  
  - Smooth animations  
  - Priority color coding  

### **Authentication & Security**  
🔐 **JWT Authentication**  
🔄 **Automatic Token Refresh**  
🛡️ **Secure HTTP-only Cookies**  
👤 **Protected Routes**  

### **Technical Features**
⚡ **Zustand State Management**
🔄 **Axios for API Calls**
🔀 **React Router DOM for Routing**
🔔 **React Hot Toast for Notifications**
🎨 **Tailwind CSS Styling**

---

## 💻 Technology Stack  

### **Frontend**  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)  
![Zustand](https://img.shields.io/badge/-Zustand-764ABC?logo=redux&logoColor=white)  
![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)  
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)  

### **Backend**  
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)  
![JWT](https://img.shields.io/badge/-JWT-000000?logo=json-web-tokens&logoColor=white)  

---

## 🛠 Installation  

### **Prerequisites**  
- **Node.js v16+**  
- **MongoDB Atlas Account**  
- **Git**  

### **Backend Setup**  
```bash
git clone https://github.com/ranjankr73/StrideDo.git
cd StrideDo/server
npm install

# Create .env file
echo "MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
PORT=8000
NODE_ENV" > .env

npm run dev
```

### **Frontend Setup**  
```bash
cd ../client
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:8000/api/v1" > .env

npm run dev
```

---

## 📚 API Documentation  

### **Authentication**  
| Endpoint          | Method | Description        |
|------------------|--------|-------------------|
| `/user/signup`   | POST   | User Registration |
| `/user/login`   | POST   | User Login        |
| `/user/refresh-token` | POST | Refresh Access Token |
| `/user/me`      | GET     | Get logged in user |
| `/user/logout`   | POST   | User Logout       |

### **Tasks**  
| Endpoint     | Method | Description        |
|-------------|--------|-------------------|
| `/task`    | GET    | Get all tasks     |
| `/task`    | POST   | Create new task   |
| `/task/:id` | PUT   | Update task       |
| `/task/:id` | DELETE | Delete task       |

### **Contact**
| Endpoint    | Method  | Description  |
|-------------|--------|-------------------|
| `/contact`  | POST   | Create the feedback/contact |

---

## 📸 Screenshots  

**Login Form**
![Login Form](screenshot\loginpage.png) 

**Signup Form**
![Signup Form](screenshot\signuppage.png)  

**Dashboard**
![Dashboard](screenshot\dashboard.png)

**New Task Form**
![Form](screenshot\createtaskform.png) 

**Update Task Form**
![Form](screenshot\updatetaskform.png) 

**Contact Form**
![Form](screenshot\contactform.png) 

---

## 🗺️ Future Roadmap  

🚀 **Calendar View Integration**  
🚀 **Bulk Actions**  
🚀 **Recurring Tasks**  
🚀 **File Attachments**  

### Thank You
Thank you for visit! Leave a feedback if you like/dislike.
