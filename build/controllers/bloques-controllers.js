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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloquesController = void 0;
const database_1 = require("../database");
class BloquesController {
    getBloques(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM tb_estacionamiento');
            res.json(result[0]);
        });
    }
    getByIdBloque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM tb_estacionamiento WHERE id_estacionamiento= ?', [id]);
            res.json(result[0]);
        });
    }
    createBloque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_estacionamiento SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteBloque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('DELETE FROM tb_estacionamiento WHERE id_estacionamiento=  ?', [id]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateBloque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('UPDATE tb_estacionamiento SET ? WHERE id_estacionamiento= ?', [req.body, id]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.bloquesController = new BloquesController();
