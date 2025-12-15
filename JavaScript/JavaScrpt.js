let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.nombre + " - S/ " + item.precio;
        lista.appendChild(li);
    });

    totalSpan.textContent = total;
}