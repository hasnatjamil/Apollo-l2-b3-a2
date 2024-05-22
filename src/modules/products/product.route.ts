import express, { Request, Response } from "express";
import { ProductModel } from "./product.model";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post('/',ProductControllers.createProduct);
router.get('/',ProductControllers.getAllProducts);

export const ProductRoutes = router;

//if routes is hited then it will go through to controller then controller call the services then srvice will handle business logics