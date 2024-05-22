//business logic will be here

import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payLoad:TProduct) =>{
    const result = await ProductModel.create(payLoad);
    return result; 
};

export const ProductServices = {
    createProduct
}