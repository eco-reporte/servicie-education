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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileToS3 = exports.upload = void 0;
const uuid_1 = require("uuid");
const multer_1 = __importDefault(require("multer"));
const client_s3_1 = require("@aws-sdk/client-s3");
// Verificar que todas las variables de entorno necesarias estén definidas
const requiredEnvVars = ['AWS_REGION', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'S3_BUCKET_NAME'];
const undefinedEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
if (undefinedEnvVars.length > 0) {
    throw new Error(`Las siguientes variables de entorno están indefinidas: ${undefinedEnvVars.join(', ')}`);
}
const s3Client = new client_s3_1.S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage,
    // Aquí puedes agregar límites como tamaño máximo del archivo
    limits: { fileSize: 10 * 1024 * 1024 }, // Ejemplo: 10 MB
    // Aquí puedes agregar una función para validar el tipo de archivo
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        }
        else {
        }
    },
});
exports.upload = upload;
const uploadFileToS3 = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const key = `${(0, uuid_1.v4)()}-${file.originalname}`;
    const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
    };
    try {
        yield s3Client.send(new client_s3_1.PutObjectCommand(uploadParams));
        return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
    }
    catch (error) {
        console.error('Error uploading file to S3:', error);
        throw error;
    }
});
exports.uploadFileToS3 = uploadFileToS3;
