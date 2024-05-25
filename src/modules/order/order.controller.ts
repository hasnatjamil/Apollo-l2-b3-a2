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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Order not found!",
            error: error,

        });
    }
}

//get orders by usee email 
const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        if (!email || typeof email !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'Invalid or missing email parameter',
            });
        }

        const orders = await OrderServices.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders!",
            error: error,
        });
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,

}