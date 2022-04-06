import { Request, Response } from 'express';
import IController from './ControllersInterface';
const db = require('../db/models');

class TodoController implements IController {
  index(req: Request, res: Response): Response {
    return res.send('todo');
  }
  create = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;
    const { description } = req.body;

    const todo = await db.todo.create({
      user_id: id,
      description,
    });

    return res.send({
      data: todo,
      message: 'todo created',
    });
  };
  show(req: Request, res: Response): Response {
    return res.send('todo');
  }
  update(req: Request, res: Response): Response {
    return res.send('todo');
  }
  delete(req: Request, res: Response): Response {
    return res.send('todo');
  }
}

export default new TodoController();
