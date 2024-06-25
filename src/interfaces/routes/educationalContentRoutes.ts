import { Router } from 'express';
import educationalContentController from '../controllers/educationalContentController';

const router = Router();

router.post('/', educationalContentController.create);
router.get('/:id', educationalContentController.get);
router.put('/:id', educationalContentController.update);
router.delete('/:id', educationalContentController.delete);

export default router;
