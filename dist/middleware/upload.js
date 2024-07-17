"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Configuración de Multer
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        // Aquí configuras la carpeta donde se guardarán los archivos subidos
        cb(null, 'uploads/'); // En este ejemplo, se guardarán en la carpeta 'uploads/'
    },
    filename: function (req, file, cb) {
        // Aquí configuras cómo se nombrarán los archivos
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path_1.default.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});
// Middleware de Multer
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // Límite de tamaño del archivo (5MB en este ejemplo)
    },
    fileFilter: function (req, file, cb) {
        // Aquí puedes añadir validaciones adicionales, por ejemplo, para tipos de archivos permitidos
        if (file.mimetype.startsWith('image/')) {
            cb(null, true); // Aceptar el archivo
        }
        else {
            cb(new Error('Solo se permiten archivos de imagen'), false); // Rechazar el archivo
        }
    }
});
exports.default = upload;
