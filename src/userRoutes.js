import express from "express";
import bcrypt from "bcrypt";
import db from "./db.js"; 

const router = express.Router();


router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

 
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Error hashing password" });
    }

    
    const query =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, hashedPassword], (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Error inserting user into database" });
      }
      res
        .status(201)
        .json({
          message: "User registered successfully",
          userId: results.insertId,
        });
    });
  });
});

export default router;
