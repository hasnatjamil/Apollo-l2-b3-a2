"use strict";
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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.send("Hello,hi");
    //now we will use product query
    // console.log(req.body);
    const productData = req.body;
    const result = yield product_service_1.ProductServices.createProduct(productData);
    res.json({
        success: true,
        message: 'Product created successfully!',
        data: result,
    });
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Products retrived succesfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products not found!",
            error: error,
        });
    }
});
//to get a specifiq product regarding its id, we need to make a controller
const getAProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params; //destructured and id will come using request param
        const result = yield product_service_1.ProductServices.getAProductById(productId); //getAProductById controller calls the 
        //ProductServices named getAProductById  
        res.status(200).json({
            success: true,
            message: "Product fetched succesfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product not found!",
            error: error,
        });
    }
});
//to update specifiq product properties regarding its product id, we will make a update controller for this
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { productData } = req.body;
        const result = yield product_service_1.ProductServices.updateProduct(productId, productData);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: error
        });
    }
});
//delete product controller 
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProduct(productId);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product.",
            error: error,
        });
    }
});
//search a product from mongodb - controller
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    if (!searchTerm || typeof searchTerm !== 'string') {
        return res.status(400).json({
            success: false,
            message: "Invalid search term!",
        });
    }
    try {
        const result = yield product_service_1.ProductServices.searchProducts(searchTerm);
        res.json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while searching for products.",
            error: error,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getAProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
};
