import { Request, Response } from "express";
import {pool} from "../database";

class BloquesController{
    async getBloques(req:Request, res:Response){
    const result= await pool.query('SELECT * FROM tb_estacionamiento');
    res.json(result[0]);
    }

    async getByIdBloque(req:Request, res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_estacionamiento WHERE id_estacionamiento= ?',[id]);
        res.json(result[0]);
        }

        async createBloque(req:Request, res:Response){
            await pool.query('INSERT INTO tb_estacionamiento SET ?',[req.body]);
            res.json({message:'Registro guardado'});
        }

        async deleteBloque(req:Request, res:Response){
            const {id}= req.params;
            await pool.query('DELETE FROM tb_estacionamiento WHERE id_estacionamiento=  ?',[id]);
            res.json({message:'Registro Eliminado'});
        }

        async updateBloque(req:Request, res:Response){
            const {id}= req.params;
            await pool.query('UPDATE tb_estacionamiento SET ? WHERE id_estacionamiento= ?',[req.body, id]);
            res.json({message:'Registro Actualizado'});
        }


}
export const bloquesController = new BloquesController();
