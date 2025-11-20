import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Users API!");
});

app.get("/users", async (req, res) => {
  try {
    // Fetch data from RandomUser API
    const response = await axios.get("https://randomuser.me/api");
    const randomUser = response.data.results[0];
    res.json(randomUser);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});