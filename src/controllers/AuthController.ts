import { Request, Response } from 'express';
import IController from './ControllersInterface';

class AuthController {
  index(req: Request, res: Response): Response {
    throw new Error('Method not implemented.');
  }
  create(req: Request, res: Response): Response {
    throw new Error('Method not implemented.');
  }
}
export default new AuthController();
