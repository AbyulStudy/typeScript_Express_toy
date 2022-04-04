import BaseRouter from './BaseRouter';

// Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('/register', AuthController.index);
    this.router.post('/login', AuthController.create);
  }
}

export default new AuthRoutes().router;
