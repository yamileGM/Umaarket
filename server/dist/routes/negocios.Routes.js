"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const negocios_Controller_1 = require("../controllers/negocios.Controller");
class NegocioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', negocios_Controller_1.negociosController.list);
        this.router.get('/:id_negocio', negocios_Controller_1.negociosController.getOne);
        this.router.post('/', negocios_Controller_1.negociosController.create);
        this.router.put('/:id_negocio', negocios_Controller_1.negociosController.update);
        this.router.delete('/:id_negocio', negocios_Controller_1.negociosController.delete);
    }
}
const negocioRoutes = new NegocioRoutes();
exports.default = negocioRoutes.router;
//# sourceMappingURL=negocios.Routes.js.map