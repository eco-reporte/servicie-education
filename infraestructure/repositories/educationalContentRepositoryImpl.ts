// src/infrastructure/repositories/educationalContentRepositoryImpl.ts
import { EducationalContent } from '../../domain/entities/educationalContent';
import EducationalContentModel, { EducationalContentCreationAttributes } from '../repositories/model/educationalContentModel';
import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';

type EducationalContentCreation = Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'>;

export class EducationalContentRepositoryImpl implements EducationalContentRepository {
    async create(contentData: EducationalContentCreationAttributes): Promise<EducationalContent> {
        console.log('contentData in repository:', contentData);
        if (!contentData.mediaUrl) {
            throw new Error('mediaUrl is required');
        }
    
        const createdContent = await EducationalContentModel.create(contentData);
        return createdContent.toJSON() as EducationalContent;
    }

    async getById(id: number): Promise<EducationalContent | null> {
        const content = await EducationalContentModel.findByPk(id);
        return content ? (content.toJSON() as EducationalContent) : null;
    }

    async update(id: number, updateData: Partial<EducationalContent>): Promise<EducationalContent | null> {
        const content = await EducationalContentModel.findByPk(id);
        if (!content) {
            return null;
        }
        await content.update(updateData);
        return content.toJSON() as EducationalContent;
    }

    async delete(id: number): Promise<void> {
        await EducationalContentModel.destroy({ where: { id } });
    }

    async getAll(): Promise<EducationalContent[]> {
        const contents = await EducationalContentModel.findAll();
        return contents.map(content => content.toJSON() as EducationalContent);
    }
}
