import { IOrder } from "./order.interface";
import { Schema, model } from "mongoose";

const orderSchema = new Schema<IOrder>({

    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
})


const OrderModel = model<IOrder>("Order", orderSchema);

export { orderSchema, OrderModel };