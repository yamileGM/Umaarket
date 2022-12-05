import { Router } from "express";
import { negociosController } from "../controllers/negocios.Controller";

class NegocioRoutes {
    
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',negociosController.list);
        this.router.get('/:id_negocio',negociosController.getOne);
        this.router.post('/',negociosController.create);
        this.router.put('/:id_negocio',negociosController.update);
        this.router.delete('/:id_negocio',negociosController.delete);
    }
}

const negocioRoutes = new NegocioRoutes();
export default negocioRoutes.router