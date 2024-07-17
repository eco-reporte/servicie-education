import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
import { EducationalContent } from "../../domain/entities/educationalContent";

export class GetAllEducationalContent {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async execute(): Promise<EducationalContent[]> {
        return this.educationalContentRepository.getAll();
    }
}