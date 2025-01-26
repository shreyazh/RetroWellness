import express from "express"; 
import bodyParser from "body-parser"; 
import userRoutes from "./userRoutes.js"; 

const app = express();

app.use(bodyParser.json());


app.use("/api/users", userRoutes);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
