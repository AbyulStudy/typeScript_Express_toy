import express, { Application, Express, Request, Response } from 'express';
import { config as dotenv } from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// Router
import UserRouter from './routers/UserRoutes';
import AuthRoutes from './routers/AuthRoutes';
import TodoRoutes from './routers/TodoRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.routes();
    dotenv();
  }

  public initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev')); // logger
    this.app.use(compression()); // gzip
    this.app.use(helmet()); // securety
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('hello ts');
    });
    this.app.use('/api/v1/users', UserRouter);
    this.app.use('/api/v1/auth', AuthRoutes);
    this.app.use('/api/v1/todos', TodoRoutes);
  }
}

const app = new App().app;
const port: string = process.env.PORT || '3000';
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
