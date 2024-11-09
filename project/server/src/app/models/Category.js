import db from '../../config/db.js';

const Category = {
    getAllCategory: async () => {
        try {
            const query = `SELECT * FROM product_category`;
            const [rows] = await db.query(query);
            return rows;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw new Error('Failed to fetch categories');
        }
    },
    InsertCategory: async (name, path, imageURL) => {
        try {
            const query = 'INSERT INTO product_category (name, path,imageURL) VALUES (?, ?, ?)';
            const [result] = await db.query(query, [name, path, imageURL]);
            return result.insertId;
        } catch (error) {
            console.error('Error inserting category:', error);
            throw new Error('Failed to insert category');
        }
    },
};

export default Category;
