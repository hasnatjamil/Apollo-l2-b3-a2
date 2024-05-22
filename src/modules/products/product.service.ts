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

export const ProductServices = {
    createProduct, getAllProducts
}