import express from 'express';
import ProductController from '../app/controllers/ProductController.js'
const router = express.Router();

router.get('/:id', ProductController.showProducts);
router.post('/', ProductController.addProduct);

export default router;