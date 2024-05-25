"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post('/', order_controller_1.OrderControllers.createOrder);
//get all order from backend 
router.get('/', order_controller_1.OrderControllers.getAllOrders);
//get user orders route search by user email
router.get('/', order_controller_1.OrderControllers.getOrdersByEmail);
// make a route that hits to controller to get specifiq data requesting by id then we need to make controller regarding this 
//router.get('/:productId', ProductControllers.getAProductById);
//search route to find  products
//router.get('/search', ProductControllers.searchProducts);
exports.OrderRoutes = router;
//if routes is hited then it will go through to controller then controller call the services then srvice will handle business logics
