import { S3 } from 'aws-sdk';
import { s3 } from './credenciales';


const uploadImageToS3 = async (file: Express.Multer.File): Promise<string> => {
    const params: S3.PutObjectRequest = {
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: `${Date.now()}_${file.originalname}`, // Nombre del archivo en S3
        Body: file.buffer, // Contenido del archivo
        ContentType: file.mimetype // Tipo de contenido
    };

    try {
        const data = await s3.upload(params).promise();
        return data.Location; // Retorna la URL del archivo subido
    } catch (error) {
        throw new Error(`Error al cargar la imagen: ${(error as Error).message}`);
    }
};
