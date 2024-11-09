import express from 'express';
import CatrgoryController from '../app/controllers/CatrgoryController.js'
const router = express.Router();

router.get('/', CatrgoryController.showAllCategory);
router.post('/', CatrgoryController.addCategory);

export default router;