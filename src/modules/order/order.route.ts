import express, { Request, Response } from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post('/', OrderControllers.createOrder);

//get all order from backend 
router.get('/', OrderControllers.getAllOrders);

//get user orders route search by user email
router.get('/', OrderControllers.getOrdersByEmail);

// make a route that hits to controller to get specifiq data requesting by id then we need to make controller regarding this 
//router.get('/:productId', ProductControllers.getAProductById);



//search route to find  products
//router.get('/search', ProductControllers.searchProducts);

export const OrderRoutes = router;

//if routes is hited then it will go through to controller then controller call the services then srvice will handle business logics