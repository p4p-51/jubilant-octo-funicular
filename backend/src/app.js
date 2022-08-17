import express from "express";
import * as OpenApiValidator from "express-openapi-validator";
import { cert, initializeApp } from "firebase-admin/app";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import serviceAccount from "../firebase.json";
import { isAuthenticated } from "./middleware/Authentication";
import router from "./routes/Router";
import spec from "./utils/SwaggerDoc";

initializeApp({
  credential: cert(serviceAccount),
});

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve up the api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.use(
  OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true,
    validateResponses: true,
    // validateResponses: { removeAdditional: 'all' }, // LMAO this doesnt work when using Allof https://github.com/cdimascio/express-openapi-validator/issues/696
  }),
);

// Authentication Middleware
app.use(isAuthenticated);

// Send request to mainRouter
app.use("/", router);

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).send(`
  <h2>Error ${err.statusCode}</h2>
  <p>${err.message}</p>
  `);
});

export default app;
