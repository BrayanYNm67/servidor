import { Router } from "express";
import { bloquesController } from "../controllers/bloques-controllers";

class BloquesRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',bloquesController.getBloques);
        this.router.get('/:id_estacionamiento', bloquesController.getByIdBloque);
        this.router.post('/',bloquesController.createBloque);
        this.router.put('/:id_estacionamiento',bloquesController.updateBloque);    //tarea 
        this.router.delete('/:id_estacionamiento',bloquesController.deleteBloque);

    }

}
const bloquesRoutes= new BloquesRoutes(); //<--
export default bloquesRoutes.router;        //<--