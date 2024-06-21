import { Router } from 'express';
import { EducationController } from '../controllers/educationalContentController';

const educationalRoutes = (educationController: EducationController): Router => {
    const router = Router();
    router.post('/upload', educationController.uploadContent);
    router.get('/:id', educationController.getContent);
    router.put('/:id', educationController.updateContent);
    router.delete('/:id', educationController.deleteContent);
    return router;
};

export default educationalRoutes;
