import { Request, Response } from 'express'

import pool from '../database';

class NegociosController {
    
    public async list(req: Request, res: Response) {
       const negocio = await pool.promise().query('SELECT * FROM negocios');
       if (negocio[0].toString().length > 0) {
        res.json(negocio[0]);
       }
       else {
           res.status(404).json({text: "No hay negocios en la base de datos"});
       }
    }

    public async getOne(req:Request,res:Response) {
        const { id_negocio } = req.params;
        const negocio = await pool.promise().query('SELECT * FROM negocios WHERE id_negocio = ?', [id_negocio]);
        if (negocio[0].toString().length > 0) {
            res.json(negocio[0]);
        }
        else {
            res.status(404).json({text: "No existe ese id en la base de datos"});
        }
    }

    public create (req: Request, res: Response) {
        console.log(req.body);
        pool.query("INSERT INTO negocios set ?",req.body);
        res.json({text: 'Negocio creado'});
    }

    public async delete (req: Request, res: Response) {
        const { id_negocio } = req.params;
        const result = await pool.promise().query("DELETE FROM negocios WHERE id_negocio = ?", [id_negocio]);
        const confirm = JSON.parse(JSON.stringify(result[0]))
        if (confirm.affectedRows == 0) {
            res.json({text: 'No existe ese id para eliminar'});
        }
        else {
            console.log(confirm.affectedRows);
            res.json({text: 'Negocio eliminado'});
        }
    }

    public async update (req:Request,res:Response) {
        const { id_negocio } = req.params;
        const result = await pool.promise().query("UPDATE negocios set ? WHERE id_negocio = ?",[req.body, id_negocio]);
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

export const negociosController = new NegociosController();