
import { EducationalContentRepository } from '../../domain/repositories/educationlContentRepository';

import { S3Adapter } from '../../infraestructure/adapters/s3Adapter';
import { EducationalContent } from '../../domain/entities/educationalContent';

export class EducationalContentService {
    private repository: EducationalContentRepository;
    private s3Adapter: S3Adapter;

    constructor() {
        this.repository = new EducationalContentRepository();
        this.s3Adapter = new S3Adapter();
    }

    async create(data: any) {
        const { title, content, type } = data;
        const newContent = new EducationalContent(title, content, type);
        return await this.repository.create(newContent);
    }

    async get(id: number) {
        return await this.repository.getById(id);
    }

    async update(id: number, data: any) {
        const updatedContent = await this.repository.update(id, data);
        return updatedContent;
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }

    async uploadFile(file: any) {
        return await this.s3Adapter.uploadFile(file);
    }
}
