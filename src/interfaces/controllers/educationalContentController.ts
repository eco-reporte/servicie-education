import { Request, Response } from 'express';
import { createEducationalContent, getEducationalContent, updateEducationalContent, deleteEducationalContent } from '../../application/use-cases';

export class EducationalContentController {
    async create(req: Request, res: Response) {
        const content = await createEducationalContent(req.body);
        res.status(201).json(content);
    }

    async get(req: Request, res: Response) {
        const content = await getEducationalContent(Number(req.params.id));
        res.status(200).json(content);
    }

    async update(req: Request, res: Response) {
        const content = await updateEducationalContent(Number(req.params.id), req.body);
        res.status(200).json(content);
    }

    async delete(req: Request, res: Response) {
        await deleteEducationalContent(Number(req.params.id));
        res.status(204).send();
    }
}
