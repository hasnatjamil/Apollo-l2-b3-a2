"use strict";
//business logic will be here
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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(payLoad);
    return result;
});
//to get all products, need to make a service which is called by controller
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
//to get specifiq product regarding its id we need to make a service 
const getAProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findById(id);
    return result;
});
//update service function
const updateProduct = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    return result;
});
//delete service to delete specific product 
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete(id);
    return result;
});
//search a specific product creating by service where search will be done according to search term
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const searchRegex = new RegExp(searchTerm, 'i');
    const result = yield product_model_1.ProductModel.find({
        $or: [
            { name: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
            { tags: { $regex: searchRegex } }
        ]
    });
    return result;
});
exports.ProductServices = {
    createProduct,
    getAllProducts,
    getAProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
};
