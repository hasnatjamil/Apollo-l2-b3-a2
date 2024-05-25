import { Request, Response } from "express";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
    const orderData = req.body;

    const result = await OrderServices.createOrder(orderData);
    res.json({
        success: true,
        message: 'Order created successfully!',
        data: result,

    })
};

const getAllOrders = async(req:Request, res:Response) =>{
    try {

        const result = await OrderServices.getAllOrders();

        res.status(200).json({
            success: true,
            message: "Orders retrived succesfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Order not found!",
            error: error,

        });
    }
}

export const OrderControllers = {
    createOrder,
    getAllOrders

}