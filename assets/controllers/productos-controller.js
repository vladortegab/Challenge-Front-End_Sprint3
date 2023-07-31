import { productosServicios } from "../../service/product-service.js";
const nuevoProducto = (imageUrl, name, precio, id, description) => {
  const linea = document.createElement("div");
  const contenido = `   <div class="product_container">
  <a href="#">
      <img class="img_product_item" src="${imageUrl}" alt="${name}">
      <button type ="button" id ="${id}" href="#" class="img_product_item_delete" 
          alt="Boton delete"></button>
      <button type ="button"  href="/edit_products.html?id=${id}" class="img_product_item_edit"  alt="Boton edit"></button>
  </a>
  <h3 class="title_product">${name}</h3>
  <h3 class="price_product">${precio}</h3>
  <a class="see_product" href="#${id}">Ver producto</a>
  </div>`;

  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    productosServicios
      .eliminarProducto(id)
      .then((respuesta) => {
        alert("Producto Eliminado, por favor refresque la página");
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return linea;
};
const table = document.querySelector("[data-table]");

productosServicios
  .listaProductos().then((data) => {
    data.forEach(({  imageUrl, name, precio, id }) => {
      const nuevaLinea = nuevoProducto(
        imageUrl,
        name,
        precio,
        id
        
      );
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error 4 " + error.message));
