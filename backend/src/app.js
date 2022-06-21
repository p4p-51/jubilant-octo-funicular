import express from 'express';
import router from "./routes/Router";

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded())

// Send request to mainRouter
app.use('/', router)

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

export default app