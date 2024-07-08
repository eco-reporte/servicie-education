"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key_1 = require("../config/key"); // Asegúrate de tener una configuración adecuada para el secreto del JWT
const authMiddleware = (req, res, next) => {
    var _a;
    // Obtener el token del encabezado de autorización
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    // Verificar y decodificar el token
    jsonwebtoken_1.default.verify(token, key_1.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Si el token es válido, añadir los datos decodificados al objeto de solicitud para uso posterior
        req.user = decoded;
        next();
    });
};
exports.authMiddleware = authMiddleware;
