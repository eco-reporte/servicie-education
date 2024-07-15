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
const credenciales_1 = require("./credenciales");
const uploadImageToS3 = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now()}_${file.originalname}`, // Nombre del archivo en S3
        Body: file.buffer, // Contenido del archivo
        ContentType: file.mimetype // Tipo de contenido
    };
    try {
        const data = yield credenciales_1.s3.upload(params).promise();
        return data.Location; // Retorna la URL del archivo subido
    }
    catch (error) {
        throw new Error(`Error al cargar la imagen: ${error.message}`);
    }
});
