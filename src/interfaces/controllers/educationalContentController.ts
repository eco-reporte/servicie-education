import { Request, Response } from 'express';
import { educationalContentService } from '../../infraestructure/dependencies';
import { EducationalContent } from '../../domain/entities/educationalContent';


class EducationalContentController {


// Método create actualizado en educationalContentController.ts
async create(req: Request, res: Response) {
    try {
        const { title, description, content, code } = req.body;
        const imageFile = req.file; // Accede al archivo subido

        if (!title || !description || !imageFile) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const imageUrl = imageFile.location; // URL de la imagen subida a S3

        const newContent: Omit<EducationalContent, 'id' | 'createdAt' | 'updatedAt'> = {
            title,
            description,
            content,
            imageUrl,
            code // Guardar la URL de la imagen en la base de datos
        };

        const createdContent = await educationalContentService.create(newContent);
        res.status(201).json(createdContent);
    } catch (error: unknown) {
        console.error('Error in create method:', error);
        res.status(500).json({ error: (error as Error).message });
    }
}


    async get(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid ID' });
            }

            const content = await educationalContentService.get(id);
            if (content) {
                res.status(200).json(content);
            } else {
                res.status(404).json({ error: 'Content not found' });
            }
        } catch (error: unknown) {
            console.error('Error in get method:', error);
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid ID' });
            }

            const { title, description, content } = req.body;
            const updateData: Partial<EducationalContent> = {};

            if (title !== undefined) updateData.title = title;
            if (description !== undefined) updateData.description = description;
            if (content !== undefined) updateData.content = content;

            if (Object.keys(updateData).length === 0) {
                return res.status(400).json({ error: 'No valid update data provided' });
            }

            const updatedContent = await educationalContentService.update(id, updateData);
            if (updatedContent) {
                res.status(200).json(updatedContent);
            } else {
                res.status(404).json({ error: 'Content not found' });
            }
        } catch (error: unknown) {
            console.error('Error in update method:', error);
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid ID' });
            }

            await educationalContentService.delete(id);
            res.status(204).send();
        } catch (error: unknown) {
            console.error('Error in delete method:', error);
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const contents = await educationalContentService.getAll();
            res.status(200).json(contents);
        } catch (error: unknown) {
            console.error('Error in getAll method:', error);
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getByCode(req: Request, res: Response) {
        try {
            const code = req.params.code;
            if (!code) {
                return res.status(400).json({ error: 'Invalid code' });
            }

            const content = await educationalContentService.getByCode(code);
            if (content) {
                res.status(200).json(content);
            } else {
                res.status(404).json({ error: 'Content not found' });
            }
        } catch (error: unknown) {
            console.error('Error in getByCode method:', error);
            res.status(500).json({ error: (error as Error).message });
        }
}
}

export default new EducationalContentController();