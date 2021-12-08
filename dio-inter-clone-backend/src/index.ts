import 'express-async-errors';
import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';
import { globalErrors } from './middleware/globalErros';

createConnection().then(connection => {
  const app = express();
  const PORT = 3333;

  app.use(express.json())

  app.use(routes);

  app.use(globalErrors);

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Unable to connect to the database", error)
})