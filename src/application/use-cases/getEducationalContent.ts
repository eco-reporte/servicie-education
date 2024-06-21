import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
import { EducationalContent } from "../../domain/entities/educationalContent";

export class GetEducationalContent {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async execute(id: number): Promise<EducationalContent | null> {
        return this.educationalContentRepository.getById(id);
    }
}
