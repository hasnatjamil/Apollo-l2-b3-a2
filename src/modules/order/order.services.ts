import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrder = async (orderLoad: TOrder) => {
    const result = await OrderModel.create(orderLoad);
    return result;
};

//to get all orders, need to make a service which is called by controller
const getAllOrders = async () => { // here we dont need to send anything
    const result = await OrderModel.find();
    return result;
};

//get a single user order by user email
const getOrdersByEmail = async (email: string) => {
    const orders = await OrderModel.find({ email });
    return orders;
};


export const OrderServices = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,

}