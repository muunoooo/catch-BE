import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ListRouter } from "./routers/routes";

const PORT: number = parseInt(process.env.PORT || "8001", 10);
const app: Application = express();

// ✅ CORS setup
const corsOptions = {
  origin: process.env.BASE_URL_FE || "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.json());
app.use(cookieParser());


app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Hello from server");
});

const listRouter = new ListRouter();
app.use("/api", listRouter.getRouter());

app.listen(PORT, () => {
  console.log(`server running on -> http://localhost:${PORT}/api`);
});
