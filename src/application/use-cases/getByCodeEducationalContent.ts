import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
import { EducationalContent } from "../../domain/entities/educationalContent";

export class GetByCodeEducationalContent {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async execute(code: string): Promise<EducationalContent | null> {
        return this.educationalContentRepository.getByCode(code);
    }
}