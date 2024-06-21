import { EducationalContent } from '../entities/educationalContent';

export interface EducationalContentRepository {
    create(content: EducationalContent): Promise<EducationalContent>;
    getById(id: number): Promise<EducationalContent>;
    update(id: number, data: any): Promise<EducationalContent>;
    delete(id: number): Promise<void>;
}
