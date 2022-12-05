import { Request, Response } from 'express';

import pool from '../database';

class AuthController {
    
    public async profile (req: Request, res: Response) {
        const id_negocio = req.params;
        const Alias = await pool.promise().query('SELECT * FROM emprendedores WHERE  ?', [id_negocio]);
        if (Alias[0].toString().length > 0) {
            res.json(Alias[0]);
        }
        else {
            res.status(404).json({text: 'El usuario no existe'});
        }
    }

    public async singup (req: Request, res: Response) {
        console.log(req.body);
        await pool.promise().query('INSERT INTO emprendedores set ?', [req.body]);
        res.json({text: 'User created'});
    }

    public async update (req: Request, res: Response) {
        const id_emprendedor = req.params;
        const result = await pool.promise().query('UPDATE emprendedores set ? WHERE ?', [req.body, id_emprendedor]);
        const confirm = JSON.parse(JSON.stringify(result[0]));
        if (confirm.affectedRows == 0) {
            res.json({text: 'No existe el Usuario a actualizar'});
        }
        else {
            console.log(confirm.affectedRows);
            res.json({text: 'Usuario actualizado'})
        }
    }

    public async delete (req: Request, res: Response) {
        const id_emprendedor = req.params;
        const result = await pool.promise().query('DELETE FROM emprendedores WHERE ?', [id_emprendedor]);
        const confirm = JSON.parse(JSON.stringify(result[0]));
        if (confirm.affectedRows == 0) {
            res.json({text: 'No existe el Usuario a eliminar'});
        }
        else {
            console.log(confirm.affectedRows);
            res.json({text: 'Usuario eliminado'})
        }
        
    }
}
const authController = new AuthController();
export default authController;