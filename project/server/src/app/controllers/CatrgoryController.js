import Category from '../models/Category.js';

class CategoryController {

    async showAllCategory(req, res) {
        try {
            const listCategory = await Category.getAllCategory();
            return res.status(200).json({ data: listCategory });
        } catch (error) {
            console.error('Error fetching categories:', error);
            return res.status(500).json({ message: 'Failed to fetch categories', error: error.message });
        }
    }


    async addCategory(req, res) {
        const { name, path, imageURL } = req.body;
        try {
            await Category.InsertCategory(name, path, imageURL);
            return res.status(201).json({ data: "Category added successfully!" });
        } catch (error) {
            console.error('Error adding category:', error);
            return res.status(500).json({ message: 'Failed to add category', error: error.message });
        }
    }
}

export default new CategoryController();
