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

//to get a specifiq product regarding its id, we need to make a controller
const getAProductById = async (req: Request, res: Response) => {

    try {

        const { productId } = req.params; //destructured and id will come using request param
        const result = await ProductServices.getAProductById(productId); //getAProductById controller calls the 
        //ProductServices named getAProductById  

        res.status(200).json({
            success: true,
            message: "Product fetched succesfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Product not found!",
            error: error,

        });
    }
};


//to update specifiq product properties regarding its product id, we will make a update controller for this
const updateProduct = async (req: Request, res: Response) => {
    try {

        const { productId } = req.params;
        const { productData } = req.body;
        const result = await ProductServices.updateProduct(productId, productData);

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

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: error.message
        })

    }
}

//delete product controller 
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteProduct(productId);

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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product.",
            error: error.message,
        });
    }
};

//search a product from mongodb - controller
const searchProducts = async (req: Request, res: Response) => {
    
    const { searchTerm } = req.query as { searchTerm: string };
    if (!searchTerm || typeof searchTerm !== 'string') {
        return res.status(400).json({
            success: false,
            message: "Invalid search term!",
        });
    }
    try {
        const result = await ProductServices.searchProducts(searchTerm);
        res.json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "An error occurred while searching for products.",
            error: error.message,
        });
    }
};



export const ProductControllers = {
    createProduct, 
    getAllProducts, 
    getAProductById, 
    updateProduct,
    deleteProduct,
    searchProducts,
}