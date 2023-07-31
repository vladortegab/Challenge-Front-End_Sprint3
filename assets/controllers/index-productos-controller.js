import { productosServicios } from "../../service/product-service.js";

const crearNuevoProducto = (producto) => {
    const {name, imageUrl, precio, id, categoria, description} = producto

    const linea = document.createElement("div");
    const contenido = ` <div class="product_container">
    <a href="#">
        <img class="img_product_item" src="${imageUrl}"
            alt="${name}">
    </a>
    <h3 class="title_product">${name}</h3>
    <h3 class="price_product">${precio}</h3>
    <a class="see_product" href="#${id}">Ver producto</a>
    </div>`;

    linea.innerHTML = contenido;

    return linea;
};

const seccionStarWars = document.querySelector('[data-product-star-wars]')
const seccionConsolas = document.querySelector('[data-product-consolas]')
const seccionDiversos = document.querySelector('[data-product-diversos]')


const cargaProductosGeneral = async() => {
    const data = await productosServicios.listaProductos()

    data.filter(producto => {
        if(producto.categoria === 'Star Wars') {
            const nuevaCard = crearNuevoProducto(producto)
            seccionStarWars.appendChild(nuevaCard)
        }
        if(producto.categoria === 'Consolas') {
            const nuevaCard = crearNuevoProducto(producto)
            seccionConsolas.appendChild(nuevaCard)
        }
        if(producto.categoria === 'Diversos') {
            const nuevaCard = crearNuevoProducto(producto)
            seccionDiversos.appendChild(nuevaCard)
        }
    });
    
};

cargaProductosGeneral()