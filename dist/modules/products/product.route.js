"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.ProductControllers.createProduct);
router.get('/', product_controller_1.ProductControllers.getAllProducts);
// make a route that hits to controller to get specifiq data requesting by id then we need to make controller regarding this 
router.get('/:productId', product_controller_1.ProductControllers.getAProductById);
//new route for updating a product
router.put('/:productId', product_controller_1.ProductControllers.updateProduct);
//delete route to delete product
router.delete('/:productId', product_controller_1.ProductControllers.deleteProduct);
//search route to find  products
router.get('/', product_controller_1.ProductControllers.searchProducts);
exports.ProductRoutes = router;
//if routes is hited then it will go through to controller then controller call the services then srvice will handle business logics
