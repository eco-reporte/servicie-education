import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
import { EducationalContent } from '../../domain/entities/educationalContent';

export class UpdateEducationalContent {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async execute(id: number, contentData: Partial<EducationalContent>): Promise<EducationalContent | null> {
        return this.educationalContentRepository.update(id, contentData);
    }
}
