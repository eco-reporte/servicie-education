import { EducationalContentRepository } from "../../domain/repositories/educationalContentRepository";
import EducationalContent from "./model/educationalContentModel";

export class EducationalContentRepositoryImpl implements EducationalContentRepository {
    async create(contentData: EducationalContent): Promise<EducationalContent> {
        // Assuming you still want to omit id, createdAt, and updatedAt when creating a new record
        const { id, createdAt, updatedAt, ...createData } = contentData;
        console.log('Creating content with data:', createData);
        const createdContent = await EducationalContent.create(createData as Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'>);
        console.log('Created content:', createdContent.toJSON());
        return createdContent.toJSON() as EducationalContent;
    }

    async getById(id: number): Promise<EducationalContent | null> {
        const content = await EducationalContent.findByPk(id);
        return content ? (content.toJSON() as EducationalContent) : null;
    }

    async getAll(): Promise<EducationalContent[]> {
        const contents = await EducationalContent.findAll();
        return contents.map(content => content.toJSON() as EducationalContent);
    }

    async update(id: number, contentData: Partial<EducationalContent>): Promise<EducationalContent | null> {
        const content = await EducationalContent.findByPk(id);
        if (content) {
            await content.update(contentData);
            return content.toJSON() as EducationalContent;
        }
        return null;
    }

    async delete(id: number): Promise<void> {
        const content = await EducationalContent.findByPk(id);
        if (content) {
            await content.destroy();
        }
    }
}