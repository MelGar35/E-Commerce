const $ = document;
const containerProducts = $.querySelector("#containerProducts")

const newCard = ({producto, imgSrc, descripcion, precio}) =>{
    return `
            <div class="card">
            <h3 class="card-title">${producto}</h3>
            <img class="card-img" src=${imgSrc} alt="Porta-Sahumerio">
            <p class="card-desc">${descripcion}</p>
            <strong class="card-price">$ ${precio}.-</strong>
            <button class="card-btn">Agregar al carrito</button>
        </div>
    `
}

const renderCards = (array) => {
 containerProducts.innerHTML = ""
    array.map(item => {
        containerProducts.innerHTML += newCard(item)
})
}

const getAll = async () => {
    try{
        const response = await fetch("http://localhost:3008/api/products")
        if (response.status !== 200) throw new Error("Error en la solicitud")
        const data = await response.json()
        renderCards(data)
        } catch(error) {
        alert("error " + error)
    }
}

getAll()