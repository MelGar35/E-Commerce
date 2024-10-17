//Using express dependency to create server (allows to use http methods)
const express = require("express")
const server = express()
const dotenv = require("dotenv")
const routerProducts = require("./src/routes/index")

dotenv.config()

const PORT = process.env.PORT || 3000

//cabeceras-cors, el numeral no es recomendable xq se podria entrar desde cualquier dominio, es de prueba en este caso.
server.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    next()
})

//root route server
server.get("/", (req,res) =>{
res.send("Api Store")
})

server.use("/api", routerProducts )

//Creating port
server.listen(PORT, ()=>{
    console.log(`Server running on Port: http://localhost:${PORT}`);
})




