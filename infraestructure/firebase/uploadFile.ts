import { storage } from '../../config/firebaseClient';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadFile(file: Express.Multer.File, filePath: string): Promise<string> {
    try {
        const storageRef = ref(storage, filePath);
        await uploadBytes(storageRef, file.buffer);
        const mediaUrl = await getDownloadURL(storageRef);
        if (!mediaUrl) {
            throw new Error('Failed to get download URL');
        }
        console.log('Generated mediaUrl:', mediaUrl);
        return mediaUrl;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file');
    }
}