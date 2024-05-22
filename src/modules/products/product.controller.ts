import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    //res.send("Hello,hi");
    //now we will use product query

    // console.log(req.body);

    const productData = req.body;

    const result = await ProductServices.createProduct(productData);

    res.json({
        success: true,
        message: 'Product created successfully!',
        data: result,

    })
};

const getAllProducts = async (req: Request, res: Response) => {
    try {

        const result = await ProductServices.getAllProducts();

        res.status(200).json({
            success: true,
            message: "Products retrived succesfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products not found!",
            error: error,

        });
    }
};

export const ProductControllers = {
    createProduct, getAllProducts,
}