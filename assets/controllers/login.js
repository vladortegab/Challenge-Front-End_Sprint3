import { productosServicios } from "../../service/product-service.js";

const login = document.querySelector("[data-form]");

login.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const emailInput = document.querySelector("[data-email]").value;
    const passwordInput = document.querySelector("[data-password]").value;

    const admins = await productosServicios.listaAdmins();

    console.log(admins)

    admins.find(usuario => {
        if (usuario.email === emailInput && usuario.password === passwordInput) {
            return window.location.href = "/products.html"
        } else {
            alert("Usuario o contraseña incorrecto")
        };
    });
});