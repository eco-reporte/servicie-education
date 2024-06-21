import { EducationalContentRepository } from '../domain/repositories/educationlContentRepository';
import { EducationalContentModel } from './repositories/model/educationalContentModel';
import { EducationalContent } from '../domain/entities/educationalContent';

export class EducationalContentRepositoryImpl implements EducationalContentRepository {
    async create(content: EducationalContent): Promise<EducationalContent> {
        const created = await EducationalContentModel.create(content);
        return created.get();
    }

    async getById(id: number): Promise<EducationalContent> {
        const content = await EducationalContentModel.findByPk(id);
        return content ? content.get() : null;
    }

    async update(id: number, data: any): Promise<EducationalContent> {
        const [updated] = await EducationalContentModel.update(data, { where: { id } });
        if (updated) {
            const updatedContent = await EducationalContentModel.findByPk(id);
            return updatedContent ? updatedContent.get() : null;
        }
        throw new Error('Content not found');
    }

    async delete(id: number): Promise<void> {
        await EducationalContentModel.destroy({ where: { id } });
    }
}
