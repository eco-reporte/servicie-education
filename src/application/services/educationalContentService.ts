//import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
import { EducationalContentRepository } from '../../domain/repositories/educationalContentRepository';
// import { EducationalContent } from '../../domain/entities/educationalContent';
import { EducationalContent } from '../../domain/entities/educationalContent';
import { CreateEducationalContent } from '../use-cases/createEducationalContent';
import { GetEducationalContent } from '../use-cases/getEducationalContent';
import { UpdateEducationalContent } from '../use-cases/updateEducationalContent';
import { DeleteEducationalContent } from '../use-cases/deleteEducationalContent';;

export class EducationalContentService {
    private createEducationalContent: CreateEducationalContent;
    private getEducationalContent: GetEducationalContent;
    private updateEducationalContent: UpdateEducationalContent;
    private deleteEducationalContent: DeleteEducationalContent;

    constructor(private educationalContentRepository: EducationalContentRepository) {
        this.createEducationalContent = new CreateEducationalContent(educationalContentRepository);
        this.getEducationalContent = new GetEducationalContent(educationalContentRepository);
        this.updateEducationalContent = new UpdateEducationalContent(educationalContentRepository);
        this.deleteEducationalContent = new DeleteEducationalContent(educationalContentRepository);
    }

    async create(contentData: EducationalContent) {
        return this.createEducationalContent.execute(contentData);
    }

    async get(id: number) {
        return this.getEducationalContent.execute(id);
    }

    async update(id: number, contentData: Partial<EducationalContent>) {
        return this.updateEducationalContent.execute(id, contentData);
    }

    async delete(id: number) {
        return this.deleteEducationalContent.execute(id);
    }
}
