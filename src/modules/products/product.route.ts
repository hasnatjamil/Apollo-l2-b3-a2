import express, { Request, Response } from "express";
import { ProductModel } from "./product.model";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post('/', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

// make a route that hits to controller to get specifiq data requesting by id then we need to make controller regarding this 
router.get('/:productId', ProductControllers.getAProductById);


//new route for updating a product
router.put('/:productId', ProductControllers.updateProduct);

//delete route to delete product
router.delete('/:productId', ProductControllers.deleteProduct);

//search route to find  products
router.get('/search', ProductControllers.searchProducts);

export const ProductRoutes = router;

//if routes is hited then it will go through to controller then controller call the services then srvice will handle business logics