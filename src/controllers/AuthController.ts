import { Request, Response } from 'express';
import PasswordHash from '../utils/PasswordHash';
const db = require('../db/models');

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashPassword: string = await PasswordHash.hash(password);

    await db.user.create({
      username,
      password: hashPassword,
    });

    return res.send('regist success');
  };
  login(req: Request, res: Response): Response {
    return res.status(200);
  }
}
export default new AuthController();
