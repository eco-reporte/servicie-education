import { Router } from 'express';
import educationalContentController from '../controllers/educationalContentController';
import upload from '../../interfaces/controllers/aws'; // Importa tu configuración de Multer

const router = Router();

router.post('/create',  upload.single('image'), educationalContentController.create);

router.put('/:id', educationalContentController.update);
router.delete('/:id', educationalContentController.delete);
router.get('/all', educationalContentController.getAll);

export default router;
