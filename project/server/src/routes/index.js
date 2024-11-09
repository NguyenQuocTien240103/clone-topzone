// cấu hình các router chính
import categoryRouter from './category.js'
import productRouter from './product.js'
function routes(app) {
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
}
export default routes;
