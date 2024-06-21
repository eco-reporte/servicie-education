import { Request, Response } from 'express';
import { educationalContentService } from '../../infrastructure/container';

class EducationalContentController {
    async create(req: Request, res: Response) {
        try {
            const content = await educationalContentService.create(req.body);
            res.status(201).json(content);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const content = await educationalContentService.get(Number(req.params.id));
            if (content) {
                res.status(200).json(content);
            } else {
                res.status(404).json({ error: 'Content not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const content = await educationalContentService.update(Number(req.params.id), req.body);
            if (content) {
                res.status(200).json(content);
            } else {
                res.status(404).json({ error: 'Content not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await educationalContentService.delete(Number(req.params.id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new EducationalContentController();
