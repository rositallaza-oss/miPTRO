//  java script de recerva

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-reservas");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // evita que se recargue la página
        alert("✅ Reserva echa correctamente");
        form.reset();
    });
});