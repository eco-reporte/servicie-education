import { EducationalContent } from '../entities/educationalContent';

export interface EducationalContentRepository {
    create(contentData: EducationalContent): Promise<EducationalContent>;
    getById(id: number): Promise<EducationalContent | null>;
    update(id: number, contentData: Partial<EducationalContent>): Promise<EducationalContent | null>;
    delete(id: number): Promise<void>;
}
