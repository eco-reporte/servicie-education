"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/educationalContentRoutes.ts
const express_1 = require("express");
const educationalContentController_1 = __importDefault(require("../controllers/educationalContentController"));
const security_1 = require("../../middleware/security"); // Importa el middleware de autenticación
const router = (0, express_1.Router)();
// Aplicar el middleware de autenticación JWT a las rutas protegidas
router.post('/', security_1.authMiddleware, educationalContentController_1.default.create);
router.put('/:id', security_1.authMiddleware, educationalContentController_1.default.update);
router.delete('/:id', security_1.authMiddleware, educationalContentController_1.default.delete);
router.get('/all', security_1.authMiddleware, educationalContentController_1.default.getAll);
exports.default = router;
