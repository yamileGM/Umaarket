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
const database_1 = __importDefault(require("../database"));
class AuthController {
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
    singup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.promise().query('INSERT INTO emprendedores set ?', [req.body]);
            res.json({ text: 'User created' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_emprendedor = req.params;
            const result = yield database_1.default.promise().query('UPDATE emprendedores set ? WHERE ?', [req.body, id_emprendedor]);
            const confirm = JSON.parse(JSON.stringify(result[0]));
            if (confirm.affectedRows == 0) {
                res.json({ text: 'No existe el Usuario a actualizar' });
            }
            else {
                console.log(confirm.affectedRows);
                res.json({ text: 'Usuario actualizado' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_emprendedor = req.params;
            const result = yield database_1.default.promise().query('DELETE FROM emprendedores WHERE ?', [id_emprendedor]);
            const confirm = JSON.parse(JSON.stringify(result[0]));
            if (confirm.affectedRows == 0) {
                res.json({ text: 'No existe el Usuario a eliminar' });
            }
            else {
                console.log(confirm.affectedRows);
                res.json({ text: 'Usuario eliminado' });
            }
        });
    }
}
const authController = new AuthController();
exports.default = authController;
//# sourceMappingURL=auth.controller.js.map