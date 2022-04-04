import { Request, Response } from 'express';
import IController from './ControllersInterface';

let data: any[] = [
  {
    id: 1,
    name: 'Adi',
  },
  {
    id: 2,
    name: 'Bdi',
  },
  {
    id: 3,
    name: 'Cdi',
  },
  {
    id: 4,
    name: 'Ddi',
  },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send('create success');
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    const person = data.find((item) => item.id == id);

    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    const person = data.find((item) => item.id == id);
    person.name = name;

    return res.send('update success');
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    data = data.filter((item) => {
      return item.id != id;
    });

    return res.send(data);
  }
}
export default new UserController();
