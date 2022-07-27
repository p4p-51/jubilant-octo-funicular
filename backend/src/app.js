import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as OpenApiValidator from 'express-openapi-validator';
import router from './routes/Router';
import spec from './utils/SwaggerDoc';
import { MongoAdapter } from './models/mongodb/MongoClient';
import Config from './utils/config';
import { initializeApp, cert } from "firebase-admin/app";
import serviceAccount from '../firebase.json'
import { isAuthenticated } from './middleware/Authentication';

initializeApp({
  credential: cert(serviceAccount)
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve up the api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

app.use(
  OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true,
    validateResponses: { removeAdditional: "all"}, //May cause unexpected behav with additionalProps
  })
);

// Authentication Middleware
app.use(isAuthenticated);

// Send request to mainRouter
app.use('/', router);

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).send(`
  <h2>Error ${err.statusCode}</h2>
  <p>${err.message}</p>
  `);
});

export default app;
