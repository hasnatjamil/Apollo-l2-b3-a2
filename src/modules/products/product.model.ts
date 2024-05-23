import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const VariantSchema = new Schema<TVariant>({
    type: { type: String, },
    value: { type: String, }
});

const InventorySchema = new Schema<TInventory>({
    quantity: { type: Number, },
    inStock: { type: Boolean, }
});

const ProductSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    category: { type: String, },
    tags: { type: [String] },
    variants: { type: [VariantSchema] },
    inventory: { type: InventorySchema }
});


const ProductModel = model<TProduct>("Product", ProductSchema);

export { VariantSchema, InventorySchema, ProductSchema, ProductModel };
