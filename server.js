
// server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001;

// Middleware

app.use(bodyParser.json());
app.use(cors({ origin: "https://boostmykey.com" })); // Restrict CORS to your domain

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "hello@thedrpdigital.com", // Your email
        pass: "elaq nvcj ymfo vlic", // Your App Password
    },
});

// POST Endpoint for Sending Emails
app.post("/submitShortcut", async (req, res) => {
    console.log("Request body:", req.body); // Debug
    const { name, email, shortcut } = req.body;

    if (!name || !email || !shortcut) {
        console.error("Missing fields");
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "hello@thedrpdigital.com",
            subject: `Shortcut Request from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nShortcut Description: ${shortcut}`,
        });

        console.log("Email sent successfully");
        res.status(200).json({ message: "Shortcut submitted successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending email. Please try again later." });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
