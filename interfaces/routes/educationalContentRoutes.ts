// routes/educationalContentRoutes.ts
import { Router } from 'express';
import educationalContentController from '../controllers/educationalContentController';
import { authMiddleware } from '../../middleware/security';
import upload from '../../middleware/upload';


const router = Router();

// Aplicar el middleware de autenticación JWT a las rutas protegidas
router.post('/', authMiddleware, upload.single('file'), educationalContentController.create);
router.put('/:id', authMiddleware, upload.single('file'), educationalContentController.update);
router.delete('/:id', authMiddleware, educationalContentController.delete);
router.get('/all', authMiddleware, educationalContentController.getAll);

export default router;
