"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage(); // Guarda los archivos en memoria en lugar de en el disco
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
