//business logic will be here

import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payLoad:TProduct) =>{
    const result = await ProductModel.create(payLoad);
    return result; 
};

//to get all products, need to make a service which is called by controller
const getAllProducts = async () =>{ // here we dont need to send anything
    const result = await ProductModel.find();
    return result; 
};

//to get specifiq product regarding its id we need to make a service 
const getAProductById = async (id: string) =>{ 
    const result = await ProductModel.findById(id);
    return result; 
};

//update service function
const updateProduct = async (id: string, updateData: Partial<TProduct>) => {
    const result = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    return result;
};

//delete service to delete specific product 
const deleteProduct = async (id: string) => {
    const result = await ProductModel.findByIdAndDelete(id);
    return result;
};

//search a specific product creating by service where search will be done according to search term
const searchProducts = async (searchTerm: string) => {
    const searchRegex = new RegExp(searchTerm, 'i'); 
    const result = await ProductModel.find({
        $or: [
            { name: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
            { tags: { $regex: searchRegex } }
        ]
    });

    return result;
};

export const ProductServices = {
    createProduct, 
    getAllProducts,
    getAProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
}