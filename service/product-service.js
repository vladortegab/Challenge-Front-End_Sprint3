//GET
// const listaProductos = () => {
//   fetch("http://localhost:3000/products")
//     .then((respuesta) => respuesta.json())
//     .catch((error) => {
//       console.log("Error al obtener la lista de productos:", error);
//       throw error;
//     });
// };
const listaProductos = () => fetch("https://64c84bafa1fe0128fbd5beff.mockapi.io/products").then( respuesta => respuesta.json());


//POST

// const crearProductos = (name, imageUrl, precio, categoria, description) => {
//   return fetch(`http://localhost:3000/products`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       imageUrl,
//       precio,
//       name,
//       categoria,
//       description,
//       id: uuid.v4()
//     }),
//   }).then(respuesta => {
//     if (respuesta.ok) {
//       return respuesta.body;
//     }
//   });
//   throw new Error("No pudimos crear el producto");
// };

const crearProductos = (imageUrl,name,  precio, categoria, description) => {
  return fetch(`https://64c84bafa1fe0128fbd5beff.mockapi.io/products`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({imageUrl, name, precio, categoria, description, id: uuid.v4()}),
  });
};

// Eliminar producto

const eliminarProducto = (id) => {
  return fetch(`https://64c84bafa1fe0128fbd5beff.mockapi.io/products/${id}`, {
      method: "DELETE",
  })
}

// Editar producto

const detalleProducto = (id) => {
  return fetch(`https://64c84bafa1fe0128fbd5beff.mockapi.io/products/${id}`).then( (respuesta) => respuesta.json());
};

const actualizarProducto = (imageUrl,name,  precio, categoria, description,id) => {
  return fetch(`https://64c84bafa1fe0128fbd5beff.mockapi.io/products/${id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({imageUrl,name,  precio, categoria, description,id})
  }).then( (respuesta) => respuesta).catch((err) => console.log(err));
}
// Leer admins

const listaAdmins = () => fetch("https://64c84bafa1fe0128fbd5beff.mockapi.io/admins/").then( respuesta => respuesta.json());

// Ver más

const obtenerProductoId = (id) => {
  return fetch(`https://64c84bafa1fe0128fbd5beff.mockapi.io/products/${id}`).then( (respuesta) => respuesta.json());
};
export const productosServicios = {
  listaProductos,
  crearProductos,
  detalleProducto,
  eliminarProducto,
  actualizarProducto,
  listaAdmins,
  obtenerProductoId
  
};
