import { EducationalContentRepository } from '../repositories/educationalContentRepository';
import { EducationalContent } from '../entities/educationalContent';

export class EducationalContentDomainService {
    constructor(private educationalContentRepository: EducationalContentRepository) {}

    async create(contentData: EducationalContent) {
        return this.educationalContentRepository.create(contentData);
    }

    async get(id: number) {
        return this.educationalContentRepository.getById(id);
    }

    async update(id: number, contentData: Partial<EducationalContent>) {
        return this.educationalContentRepository.update(id, contentData);
    }

    async delete(id: number) {
        return this.educationalContentRepository.delete(id);
    }

    async getAll() {
        return this.educationalContentRepository.getAll();
    }

    async getByCode(code: string) {
        return this.educationalContentRepository.getByCode(code);
    }
}
