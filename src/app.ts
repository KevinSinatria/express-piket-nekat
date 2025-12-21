import express from "express";
import type { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import type { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes.js";
import YAML from "yamljs";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import path from "path";
import swaggerUi, { type SwaggerOptions } from "swagger-ui-express";

dotenv.config();

const app: Express = express();
const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
const swaggerDocument = YAML.load(path.join(process.cwd(), "openapi.yaml"));
const swaggerOptions: SwaggerOptions = {
  swaggerOptions: {
    url: "https://piket-nekat-be.vercel.app/api-docs",
  },
  customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui.css",
  customJs: [
    "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-bundle.js",
    "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js",
  ],
};

// Setup middleware utama
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-docs", express.static(path.join(process.cwd(), "openapi.yaml")));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerOptions)
);

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
