import { Request, Response } from "express";
import {pool} from "../database";

class EmpleadosController{
    async getEmpleados(req:Request, res:Response){
    const result= await pool.query('SELECT * FROM tb_empleados');
    res.json(result[0]);
    }

    async getByIdEmpleado(req:Request, res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_empleados WHERE id_empleado= ?',[id]);
        res.json(result[0]);
        }

        async createEmpleados(req:Request, res:Response){
            await pool.query('INSERT INTO tb_empleados SET ?',[req.body]);
            res.json({message:'Registro guardado'});
        }

        async deleteEmpleado(req:Request, res:Response){
            const {id}= req.params;
            await pool.query('DELETE FROM tb_empleados WHERE id_empleado=  ?',[id]);
            res.json({message:'Registro Eliminado'});
        }

        async updateEmpleado(req:Request, res:Response){
            const {id}= req.params;
            await pool.query('UPDATE tb_empleados SET ? WHERE id_empleado= ?',[req.body, id]);
            res.json({message:'Registro Actualizado'});
        }


}
export const empleadosController = new EmpleadosController();
