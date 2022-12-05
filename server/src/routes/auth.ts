import { Router } from "express";

import authController from "../controllers/auth.controller";


class AuthRouter {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/:id_negocio', authController.profile);
        this.router.post('/', authController.singup);
        this.router.put('/:id_emprendedor', authController.update);
        this.router.delete('/:id_emprendedor', authController.delete);
    }
}
const authRoutes = new AuthRouter();
export default authRoutes.router;