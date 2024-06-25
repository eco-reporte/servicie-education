import { EducationalContentRepository } from "../../domain/repositories/educationalContentRepository";


export class DeleteEducationalContent {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async execute(id: number): Promise<void> {
        await this.educationalContentRepository.delete(id);
    }
}
