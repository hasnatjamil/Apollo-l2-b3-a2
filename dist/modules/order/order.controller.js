"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const result = yield order_services_1.OrderServices.createOrder(orderData);
    res.json({
        success: true,
        message: 'Order created successfully!',
        data: result,
    });
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.OrderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders retrived succesfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order not found!",
            error: error,
        });
    }
});
//get orders by usee email 
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (!email || typeof email !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'Invalid or missing email parameter',
            });
        }
        const orders = yield order_services_1.OrderServices.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: orders
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders!",
            error: error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
