import express from "express";
import cors from "cors";
import dbconnect from "./db.js";
import router from "./routes/router.js";

const app = express();

// middlewares  
app.use(express.json());
app.use("/api", router);
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // If you're using cookies or authorization headers
}));
// server listening
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
});

// database connection
dbconnect();