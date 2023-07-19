import { Router } from "express";
import {empleadosController} from '../controllers/empleados-controller'


class EmpleadosRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',empleadosController.getEmpleados);
        this.router.get('/:id', empleadosController.getByIdEmpleado);
        this.router.post('/',empleadosController.createEmpleados);
        this.router.put('/:id',empleadosController.updateEmpleado);    //tarea 
        this.router.delete('/:id',empleadosController.deleteEmpleado);

    }

}
const empleadosRoutes= new EmpleadosRoutes(); //<--
export default empleadosRoutes.router;        //<--