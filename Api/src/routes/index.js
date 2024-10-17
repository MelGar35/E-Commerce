const express = require("express")
const router = express.Router()

const Products = require("../controllers/index")

router.get("/products", Products.getAll)

//router.post("/products")

module.exports = router
