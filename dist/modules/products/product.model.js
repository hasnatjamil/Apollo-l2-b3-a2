"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = exports.InventorySchema = exports.VariantSchema = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: { type: String, },
    value: { type: String, }
});
exports.VariantSchema = VariantSchema;
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, },
    inStock: { type: Boolean, }
});
exports.InventorySchema = InventorySchema;
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    category: { type: String, },
    tags: { type: [String] },
    variants: { type: [VariantSchema] },
    inventory: { type: InventorySchema }
});
exports.ProductSchema = ProductSchema;
const ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
exports.ProductModel = ProductModel;
