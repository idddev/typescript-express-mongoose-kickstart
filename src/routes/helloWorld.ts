import { Router } from 'express';
import { HelloWorldController } from '../controllers/helloWorld';

const router = Router();

router.get('/api/helloWorld', HelloWorldController.getIndex);

export default router;