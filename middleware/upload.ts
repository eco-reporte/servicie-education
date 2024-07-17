// src/middleware/upload.ts
import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento para multer
const storage = multer.memoryStorage(); // Almacenamiento en memoria para subir archivos a Firebase

// Filtro de archivos para aceptar solo ciertos tipos de archivos
const fileFilter = (req: any, file: any, cb: any) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|avi|mov/; // Tipos de archivo de video añadidos (mp4, avi, mov)
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, GIF, MP4, AVI, and MOV file types are allowed.'));
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 100 // Limite de tamaño de archivo: 100MB (ajusta según tus necesidades)
    },
    fileFilter: fileFilter
});

export default upload;
