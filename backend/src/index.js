import express from "express"
import "dotenv/config"

const app = express()
console.log("DB_URL=", process.env.MONGO_URI)

app.listen(3000, () => console.log("Server is up and running on port 123"));  