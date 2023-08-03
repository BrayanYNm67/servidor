"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bloques_controllers_1 = require("../controllers/bloques-controllers");
class BloquesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', bloques_controllers_1.bloquesController.getBloques);
        this.router.get('/:id_estacionamiento', bloques_controllers_1.bloquesController.getByIdBloque);
        this.router.post('/', bloques_controllers_1.bloquesController.createBloque);
        this.router.put('/:id_estacionamiento', bloques_controllers_1.bloquesController.updateBloque); //tarea 
        this.router.delete('/:id_estacionamiento', bloques_controllers_1.bloquesController.deleteBloque);
    }
}
const bloquesRoutes = new BloquesRoutes(); //<--
exports.default = bloquesRoutes.router; //<--
