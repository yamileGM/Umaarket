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
exports.productosController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductosController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const negocio = yield database_1.default.promise().query('SELECT * FROM productos');
            if (negocio[0].toString().length > 0) {
                res.json(negocio[0]);
            }
            else {
                res.status(404).json({ text: "No hay productos en la base de datos" });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_producto } = req.params;
            const negocio = yield database_1.default.promise().query('SELECT * FROM productos WHERE id_producto = ?', [id_producto]);
            if (negocio[0].toString().length > 0) {
                res.json(negocio[0]);
            }
            else {
                res.status(404).json({ text: "No existe ese id en la base de datos" });
            }
        });
    }
    create(req, res) {
        console.log(req.body);
        database_1.default.query("INSERT INTO productos set ?", req.body);
        res.json({ text: 'Producto creado' });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_producto } = req.params;
            const result = yield database_1.default.promise().query("DELETE FROM productos WHERE id_producto = ?", [id_producto]);
            const confirm = JSON.parse(JSON.stringify(result[0]));
            if (confirm.affectedRows == 0) {
                res.json({ text: 'No existe ese id para eliminar' });
            }
            else {
                console.log(confirm.affectedRows);
                res.json({ text: 'Producto eliminado' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_producto } = req.params;
            const result = yield database_1.default.promise().query("UPDATE productos set ? WHERE id_producto = ?", [req.body, id_producto]);
            console.log(result);
            const confirm = JSON.parse(JSON.stringify(result[0]));
            if (confirm.affectedRows == 0) {
                res.json({ text: 'No existe ese id para eliminar' });
            }
            else {
                console.log(confirm.affectedRows);
                res.json({ text: 'Negocios actualizado' });
            }
        });
    }
}
exports.productosController = new ProductosController();
//# sourceMappingURL=productos.js.map