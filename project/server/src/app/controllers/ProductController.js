import Product from '../models/Product.js';

class ProductController {

    async showProducts(req, res) {
        const idCategory = req.params.id;
        try {
            const listProduct = await Product.getProductByIdCategory(idCategory);
            return res.status(200).json({ data: listProduct });
        } catch (error) {
            console.error('Error fetching products:', error);
            return res.status(500).json({ message: 'Failed to fetch products', error: error.message });
        }
    }

    async addProduct(req, res) {
        const { idCategory, name, imageURL, price } = req.body;
        try {
            await Product.InsertProduct(idCategory, name, imageURL, price);
            return res.status(201).json({ data: "Product added successfully!" });
        } catch (error) {
            console.error('Error adding product:', error);
            return res.status(500).json({ message: 'Failed to add product', error: error.message });
        }
    }
}

export default new ProductController();
