import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrder = async (orderLoad:IOrder) =>{
    const result = await OrderModel.create(orderLoad);
    return result; 
};


export const OrderServices = {
    createOrder, 
    
}