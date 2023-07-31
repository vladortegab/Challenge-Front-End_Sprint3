import { productosServicios } from "../../service/product-service.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");

    const imageUrl = document.querySelector("[data-imageUrl]");
    const categoria = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-precio]");
    const description = document.querySelector("[data-description]");

    try {
        const product = await productosServicios.detalleProducto(id);
        if(product.imageUrl) {
            imageUrl.value = product.imageUrl;
            categoria.value = product.categoria;
            name.value = product.name;
            precio.value = product.precio;
            description.value = product.description;
        } else {
            throw new Error();
        }

    } catch(error){
        alert("Hubo un error")
    }

};
obtenerInformacion();

form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");

    const imageUrl = document.querySelector("[data-imageUrl]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-description]").value;

    try {
        const actualizar = await productosServicios.actualizarProducto(imageUrl, categoria, name, precio, description, id);
        if (actualizar) {
            window.location.href="/products.html"
        } else {
            throw new Error();
        };
    } catch(error){
        alert("Hubo un error")
    };
});