import { Request, Response } from 'express'

import pool from '../database';

class ProductosController {
    
    public async getAll(req:Request,res:Response) {
        const { id_negocio } = req.params;
        const negocio = await pool.promise().query('SELECT * FROM productos WHERE id_negocio = ?', [id_negocio]);
        if (negocio[0].toString().length > 0) {
            res.json(negocio[0]);
        }
        else {
            res.status(404).json({text: "No existe ese id en la base de datos"});
        }
    }

    public async getOne(req:Request,res:Response) {
        const { id_producto } = req.params;
        const negocio = await pool.promise().query('SELECT * FROM productos WHERE id_producto = ?', [id_producto]);
        if (negocio[0].toString().length > 0) {
            res.json(negocio[0]);
        }
        else {
            res.status(404).json({text: "No existe ese id en la base de datos"});
        }
    }

    public create (req: Request, res: Response) {
        console.log(req.body);
        pool.query("INSERT INTO productos set ?",req.body);
        res.json({text: 'Producto creado'});
    }

    public async delete (req: Request, res: Response) {
        const { id_producto } = req.params;
        const result = await pool.promise().query("DELETE FROM productos WHERE id_producto = ?", [id_producto]);
        const confirm = JSON.parse(JSON.stringify(result[0]))
        if (confirm.affectedRows == 0) {
            res.json({text: 'No existe ese id para eliminar'});
        }
        else {
            console.log(confirm.affectedRows);
            res.json({text: 'Producto eliminado'});
        }
    }

    public async update (req:Request,res:Response) {
        const { id_producto } = req.params;
        const result = await pool.promise().query("UPDATE productos set ? WHERE id_producto = ?",[req.body, id_producto]);
        console.log(result);
        const confirm = JSON.parse(JSON.stringify(result[0]))
        if (confirm.affectedRows == 0) {
            res.json({text: 'No existe ese id para eliminar'});
        }
        else {
            console.log(confirm.affectedRows);
            res.json({text: 'Negocios actualizado'});
        }
    }
}

export const productosController = new ProductosController();