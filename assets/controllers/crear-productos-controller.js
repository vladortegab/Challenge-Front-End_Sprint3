import { productosServicios } from "../../service/product-service.js";
const form = document.querySelector("[data-form]");
form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const imageUrl = document.querySelector("[data-imageUrl]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const name = document.querySelector("[data-name]").value;
  const precio = document.querySelector("[data-precio]").value;
  const description = document.querySelector("[data-description]").value;

  try {
    const add = productosServicios.crearProductos(imageUrl, categoria, name, precio, description);
    if (add) {
        alert("Producto agregado con exito regrese al Menu Administrador");
        // window.location.href = "/index.html";
    } else {
        throw new Error();
    }
  } catch(error){
    alert("Hubo un error 2")
  }
});
