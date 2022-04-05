import BaseRouter from './BaseRouter';
import validate from '../middlewares/AuthValidator';
// Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', AuthController.login);
  }
}

export default new AuthRoutes().router;
