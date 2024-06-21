import { EducationalContentRepository } from "../../domain/repositories/educationalContentRepository";
import EducationalContent from "./model/educationalContentModel";


export class EducationalContentRepositoryImpl implements EducationalContentRepository {
    async create(contentData: EducationalContent): Promise<EducationalContent> {
        const createdContent = await EducationalContent.create(contentData);
        return createdContent.toJSON() as EducationalContent;
    }

    async getById(id: number): Promise<EducationalContent | null> {
        const content = await EducationalContent.findByPk(id);
        return content ? (content.toJSON() as EducationalContent) : null;
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
