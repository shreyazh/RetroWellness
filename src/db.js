import mysql from "mysql2";


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "retrowellness",
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

export default connection;
