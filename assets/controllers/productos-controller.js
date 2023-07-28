
const nuevoProducto = (name, imageUrl, precio, id,categoria, description) => {
  const card = document.createElement("div");
  const contenido = ` <div class="product_container">
    <a href="#">
        <img class="img_product_item" src="${imageUrl}"
            alt="Taza Star Wars Image">
    </a>
    <h3 class="title_product">${name}</h3>
    <h3 class="price_product">${precio}</h3>
    <a class="see_product" href="./products.html?id=${id}">Ver producto</a>
</div>`
card.innerHTML = contenido
card.dataset.id = id
return card
};

const productos = document.querySelector('[data-product-star-wars]')