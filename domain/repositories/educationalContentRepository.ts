// src/domain/repositories/educationalContentRepository.ts
import { EducationalContent } from '../entities/educationalContent';

export interface EducationalContentRepository {
    create(contentData: Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'>): Promise<EducationalContent>;
    getById(id: number): Promise<EducationalContent | null>; // Método getById
    update(id: number, updateData: Partial<EducationalContent>): Promise<EducationalContent | null>;
    delete(id: number): Promise<void>;
    getAll(): Promise<EducationalContent[]>;
}
