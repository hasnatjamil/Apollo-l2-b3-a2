import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrder = async (orderLoad:IOrder) =>{
    const result = await OrderModel.create(orderLoad);
    return result; 
};

//to get all orders, need to make a service which is called by controller
const getAllOrders = async () =>{ // here we dont need to send anything
    const result = await OrderModel.find();
    return result; 
};


export const OrderServices = {
    createOrder, 
    getAllOrders,
    
}