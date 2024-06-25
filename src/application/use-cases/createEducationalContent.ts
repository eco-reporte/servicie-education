
import { EducationalContentRepository } from "../../domain/repositories/educationalContentRepository";
import { EducationalContent } from "../../domain/entities/educationalContent";

export class CreateEducationalContent {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async execute(contentData: EducationalContent): Promise<EducationalContent> {
        return this.educationalContentRepository.create(contentData);
    }
}
