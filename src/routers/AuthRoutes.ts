import BaseRouter from './BaseRouter';
import validate from '../middlewares/AuthValidator';
import { auth } from '../middlewares/AuthMiddleware';

// Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', AuthController.login);
    this.router.get('/profile', auth, AuthController.profile);
  }
}

export default new AuthRoutes().router;
