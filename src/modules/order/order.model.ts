import { TOrder } from "./order.interface";
import { Schema, model } from "mongoose";

const orderSchema = new Schema<TOrder>({

    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
})


const OrderModel = model<TOrder>("Order", orderSchema);

export { orderSchema, OrderModel };

