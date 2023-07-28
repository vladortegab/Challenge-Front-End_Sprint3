//GET
const listaProductos = () => {
  fetch("http://localhost:3000/products")
    .then((respuesta) => respuesta.json())
    .catch((error) => {
      console.log("Error al obtener la lista de productos:", error);
      throw error;
    });
};

//POST

const crearProductos = (name, imageUrl, precio, categoria, description) => {
  fetch(`http://localhost:3000/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      precio,
      name,
      categoria,
      description,
    }),
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.body;
    }
  });
  throw new Error("No pudimos crear el producto");
};

export const productosServicios = {
  listaProductos,
  crearProductos,
};
