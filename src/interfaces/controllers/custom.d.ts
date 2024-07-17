// custom.d.ts
declare namespace Express {
    interface Request {
        file: MulterS3File;
    }
}

interface MulterS3File extends Express.Multer.File {
    location: string; // Propiedad agregada para la URL del archivo en S3
}