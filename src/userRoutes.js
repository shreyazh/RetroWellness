import express from "express";
import bcrypt from "bcrypt";
import db from "./db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// register route
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: "Error hashing password" });
      }

      const insertQuery =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(
        insertQuery,
        [username, email, hashedPassword],
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ error: "Error inserting user into database" });
          }
          res.status(201).json({
            message: "User registered successfully",
            userId: results.insertId,
          });
        }
      );
    });
  });
});

// login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "Error comparing password" });
      }
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ userId: results[0].id }, "your_jwt_secret", {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Login successful", token });
    });
  });
});

//time capsule route
router.post("/time-capsule", (req, res) => {
  const { userId, entry } = req.body;

  const insertQuery =
    "INSERT INTO time_capsules (user_id, entry) VALUES (?, ?)";
  db.query(insertQuery, [userId, entry], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error saving time capsule entry" });
    }
    res.status(201).json({ message: "Entry saved successfully" });
  });
});

router.get("/time-capsule/:userId", (req, res) => {
  const userId = req.params.userId;

  const fetchQuery = "SELECT * FROM time_capsules WHERE user_id = ?";
  db.query(fetchQuery, [userId], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error fetching time capsule entries" });
    }
    res.status(200).json({ entries: results });
  });
});

export default router;
