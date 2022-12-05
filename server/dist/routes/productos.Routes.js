"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_Controller_1 = require("../controllers/productos.Controller");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id_negocio', productos_Controller_1.productosController.getAll);
        this.router.get('/:id_producto', productos_Controller_1.productosController.getOne);
        this.router.post('/', productos_Controller_1.productosController.create);
        this.router.put('/:id_producto', productos_Controller_1.productosController.update);
        this.router.delete('/:id_producto', productos_Controller_1.productosController.delete);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
//# sourceMappingURL=productos.Routes.js.map