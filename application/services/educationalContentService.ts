import { EducationalContent } from '../../domain/entities/educationalContent';
import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
import { uploadFile } from '../services/storageMultimedia'; // Asegúrate de que este servicio esté correctamente implementado
import { v4 as uuidv4 } from 'uuid';

export class EducationalContentService {
    constructor(private repository: EducationalContentRepository) {}

    async create(contentData: Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'>): Promise<EducationalContent> {
        console.log('contentData in service:', contentData);
        if (!contentData.mediaUrl) {
            throw new Error('mediaUrl is required');
        }
        return this.repository.create(contentData);
    }


    async get(id: number): Promise<EducationalContent | null> {
        return this.repository.getById(id);
    }
    
    async update(id: number, contentData: Partial<Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'>>, file?: Express.Multer.File): Promise<EducationalContent | null> {
        if (file) {
            const path = `educational-content/${uuidv4()}-${file.originalname}`;
            const mediaUrl = await uploadFile(file, path);
            contentData.mediaUrl = mediaUrl;
        }

        return this.repository.update(id, contentData as Partial<EducationalContent>);
    }

    async delete(id: number): Promise<void> {
        return this.repository.delete(id);
    }

    async getAll(): Promise<EducationalContent[]> {
        return this.repository.getAll();
    }
}
