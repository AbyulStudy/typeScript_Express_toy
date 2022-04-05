import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import Authentication from '../utils/Authentication';
const db = require('../db/models');

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashPassword: string = await Authentication.passwordHash(password);

    await db.user.create({
      username,
      password: hashPassword,
    });

    return res.send('regist success');
  };
  login = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    //search data user by username
    const searchUser = await db.user.findOne({
      where: { username },
    });

    // check password
    let compare = await Authentication.passwordCompare(
      password,
      searchUser.password
    );
    // generate token
    if (compare) {
      let token = Authentication.generateToken(
        searchUser.id,
        searchUser.username,
        searchUser.password
      );

      return res.send({ token });
    }

    return res.send('fal');
  };
}
export default new AuthController();
