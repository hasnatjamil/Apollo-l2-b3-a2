//const express = require('express')
import express, { Request, Response } from 'express'
import { ProductRoutes } from './modules/products/product.route'
const app = express()

//json parser
app.use(express.json())


app.use("/api/products", ProductRoutes);

app.get('/', (req: Request , res: Response) => {
  res.send('Hello Worlsssss!')
})

export default app;