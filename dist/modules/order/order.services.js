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
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const createOrder = (orderLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.create(orderLoad);
    return result;
});
//to get all orders, need to make a service which is called by controller
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find();
    return result;
});
//get a single user order by user email
const getOrdersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.OrderModel.find({ email });
    return orders;
});
exports.OrderServices = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
