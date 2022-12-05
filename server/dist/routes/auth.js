"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id_negocio', auth_controller_1.default.profile);
        this.router.post('/', auth_controller_1.default.singup);
        this.router.put('/:id_emprendedor', auth_controller_1.default.update);
        this.router.delete('/:id_emprendedor', auth_controller_1.default.delete);
    }
}
const authRoutes = new AuthRouter();
exports.default = authRoutes.router;
//# sourceMappingURL=auth.js.map