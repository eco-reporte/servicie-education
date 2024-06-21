import { Router } from 'express';
import { EducationalContentController } from './interfaces/controllers/educationalContentController';
import { upload } from './config/multer';

const router = Router();
const controller = new EducationalContentController();

router.post('/contents', upload.single('file'), controller.create);
router.get('/contents/:id', controller.get);
router.put('/contents/:id', controller.update);
router.delete('/contents/:id', controller.delete);

export { router as educationalContentRoutes };
