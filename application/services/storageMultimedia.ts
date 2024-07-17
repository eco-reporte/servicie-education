import { storage } from '../../config/firebaseClient';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadFile = async (file: Express.Multer.File, path: string): Promise<string> => {
    try {
        const storageRef = ref(storage, path);
        const buffer = Buffer.from(file.buffer);
        await uploadBytes(storageRef, buffer, { contentType: file.mimetype });
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file');
    }
};
