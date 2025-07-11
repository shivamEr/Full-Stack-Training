
const productRoute = require('express').Router();

const {
    getAllProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

productRoute.get('/', getAllProduct);
productRoute.post('/add', addProduct);
productRoute.put('/update/:id', updateProduct);
productRoute.delete('/delete/:id', deleteProduct);

module.exports = productRoute;