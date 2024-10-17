const ProductsModel = require("../models/index")

class Products{
    static async getAll(req,res){
        const {data,error} = await ProductsModel.getAll()
        error ? res.status(400).json({error: "No products found"})
              : res.status(200).json(data)
    } 
}

module.exports = Products

