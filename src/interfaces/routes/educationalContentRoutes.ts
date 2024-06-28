import { Router } from 'express';
import educationalContentController from '../controllers/educationalContentController';

const router = Router();

router.post('/', educationalContentController.create);
router.put('/:id', educationalContentController.update);
router.delete('/:id', educationalContentController.delete);
router.get('/all', educationalContentController.getAll);

export default router;
