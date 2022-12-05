import { Router } from "express";
import { productosController } from "../controllers/productos.Controller";

class ProductoRoutes {
    
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:id_negocio',productosController.getAll);
        this.router.get('/:id_producto',productosController.getOne);
        this.router.post('/',productosController.create);
        this.router.put('/:id_producto',productosController.update);
        this.router.delete('/:id_producto',productosController.delete);
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router