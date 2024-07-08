// routes/educationalContentRoutes.ts
import { Router } from 'express';
import educationalContentController from '../controllers/educationalContentController';
import { authMiddleware } from '../../middleware/security'; // Importa el middleware de autenticación

const router = Router();

// Aplicar el middleware de autenticación JWT a las rutas protegidas
router.post('/', authMiddleware, educationalContentController.create);
router.put('/:id', authMiddleware, educationalContentController.update);
router.delete('/:id', authMiddleware, educationalContentController.delete);
router.get('/all', authMiddleware, educationalContentController.getAll);

export default router;
