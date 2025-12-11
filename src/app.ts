import express from "express";
import type { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import type { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

dotenv.config();

const app: Express = express();
const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};

// Setup middleware utama
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

// Endpoint utama
app.use("/", routes);

// Error Handler
app.use(errorHandler);
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: `Endpoint ${req.originalUrl} not found`,
  });
});

export default app;
