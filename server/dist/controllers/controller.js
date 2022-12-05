"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const database_1 = __importDefault(require("../database"));
class Controller {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const negocio = yield database_1.default.promise().query('SELECT * FROM negocios');
            if (negocio[0].toString().length > 0) {
                res.json(negocio[0]);
            }
            else {
                res.status(404).json({ text: "No hay negocios en la base de datos" });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_negocio } = req.params;
            const negocio = yield database_1.default.promise().query('SELECT * FROM negocios WHERE id_negocio = ?', [id_negocio]);
            if (negocio[0].toString().length > 0) {
                res.json(negocio[0]);
            }
            else {
                res.status(404).json({ text: "No existe ese id en la base de datos" });
            }
            console.log("ENTRO A NEGOCIO");
        });
    }
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_negocio = req.params;
            const Alias = yield database_1.default.promise().query('SELECT * FROM emprendedores WHERE  ?', [id_negocio]);
            if (Alias[0].toString().length > 0) {
                res.json(Alias[0]);
            }
            else {
                res.status(404).json({ text: 'El usuario no existe' });
            }
        });
    }
}
exports.controller = new Controller();
//# sourceMappingURL=controller.js.map