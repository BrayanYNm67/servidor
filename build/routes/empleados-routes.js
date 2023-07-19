"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleados_controller_1 = require("../controllers/empleados-controller");
class EmpleadosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', empleados_controller_1.empleadosController.getEmpleados);
        this.router.get('/:id', empleados_controller_1.empleadosController.getByIdEmpleado);
        this.router.post('/', empleados_controller_1.empleadosController.createEmpleados);
        this.router.put('/:id', empleados_controller_1.empleadosController.updateEmpleado); //tarea 
        this.router.delete('/:id', empleados_controller_1.empleadosController.deleteEmpleado);
    }
}
const empleadosRoutes = new EmpleadosRoutes(); //<--
exports.default = empleadosRoutes.router; //<--
