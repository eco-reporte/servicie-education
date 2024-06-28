import { EducationalContent } from '../../domain/entities/educationalContent';
import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
//importa uuidv4
import { v4 as uuidv4 } from 'uuid';

export class EducationalContentService {
    constructor(private repository: EducationalContentRepository) {}

    async create(contentData: Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'>): Promise<EducationalContent> {
        const newContent: EducationalContent = {
            ...contentData,
            createdAt: new Date(),
            updatedAt: new Date(),
            id: 0
        };
        return this.repository.create(newContent);
      }
    
    async get(id: number): Promise<EducationalContent | null> {
        return this.repository.getById(id);
    }
    
    async update(id: number, contentData: Partial<EducationalContent>): Promise<EducationalContent | null> {
        return this.repository.update(id, contentData);
    }
    
    async delete(id: number): Promise<void> {
        return this.repository.delete(id);
    }

    async getAll(): Promise<EducationalContent[]> {
        return this.repository.getAll();
    }

}