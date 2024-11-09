import db from '../../config/db.js';

const Product = {
    getAllProduct: async () => {
        try {
            const query = `SELECT * FROM product_category`;
            const [rows] = await db.query(query);
            return rows;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw new Error('Failed to fetch categories');
        }
    },
    getProductByIdCategory: async (idCategory) => {
        try {
            const query = `SELECT * FROM product WHERE idCategory = ?`;
            const [rows] = await db.query(query, [idCategory]);
            return rows;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw new Error('Failed to fetch categories');
        }
    },
    InsertProduct: async (idCategory, name, imageURL, price) => {
        try {
            const query = 'INSERT INTO product (idCategory,name,imageURL,price) VALUES (?, ?, ?, ?)';
            const [result] = await db.query(query, [idCategory, name, imageURL, price]);
            return result.insertId;
        } catch (error) {
            console.error('Error inserting product:', error);
            throw new Error('Failed to insert product');
        }
    },
};

export default Product;
