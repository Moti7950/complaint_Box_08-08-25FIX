# Complaint Box

A simple system for submitting complaints and retrieving them by an administrator.

## 📌 Overview
The system allows:
- **Soldiers** – to fill out a complaint form with a category and description.
- **Commanders/Admins** – to log in with a username and password and retrieve the list of complaints from the database.

It consists of HTML client-side pages and a Node.js + Express server with a MongoDB database.

---

## 📂 Project Structure

```
.
├── index.html             # Home page – link to complaint form or admin login form
├── complaint.html         # Complaint submission form
├── app.js                 # Server startup
├── ExspresServer.js       # Express app and router configuration
├── adminRouter.js         # Admin routes (read complaints with authentication)
├── complaintRouter.js     # Routes for submitting complaints
├── utilsFunction.js       # MongoDB helper functions
└── style.css              # Styling (if present)
```

---

## ⚙️ Installation & Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with:
   ```env
   PORT=7895
   MONGO_URL=<Your MongoDB connection string>
   USERNAME=<Admin username>
   PASSWORD=<Admin password>
   ```

3. Start the server:
   ```bash
   node app.js
   ```
   The server will listen at `http://localhost:7895`

---

## 🖥️ Usage

### Soldiers – Submit a Complaint
1. Open `http://localhost:7895/index.html`
2. Click **Please enter on me** to go to `complaint.html`.
3. Select a category, write the complaint description, and click **Submit**.
4. The data will be sent via POST to `/complaint/newComplaint` and stored in the database.

### Admin – View Complaints
1. In the admin login form on `index.html`, enter the username and password.
2. Submit the form – it sends a GET request to `/user/readComplaints` with login credentials in the query string.
3. If authentication is successful, the server responds with a JSON list of complaints.

---

## 📜 Key Files

- **`adminRouter.js`** – Middleware for checking username and password from query string, and a GET route to retrieve complaints (`/user/readComplaints`).
- **`complaintRouter.js`** – Handles POST requests for adding a new complaint (`/complaint/newComplaint`).
- **`utilsFunction.js`** – MongoDB functions for connecting, retrieving (`getAllComplaints`), creating (`createNewComplaint`), and generating a complaint object (`newComplainTemplit`).

- The `USERNAME` and `PASSWORD` environment variables are used for admin authentication.
