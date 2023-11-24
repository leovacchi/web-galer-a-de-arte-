document.addEventListener("DOMContentLoaded", function () {
    // Se ejecuta cuando el DOM ha sido completamente cargado

    // Obtiene el contenedor de la galería
    const gallery = document.getElementById("gallery");

    // Función para renderizar la galería
    function renderGallery() {
        gallery.innerHTML = "";
        // Obtiene las obras de arte almacenadas en localStorage
        const artworks = JSON.parse(localStorage.getItem("artworks")) || [];

        // Itera sobre cada obra de arte y la agrega a la galería
        artworks.forEach((artwork, index) => {
            const artworkDiv = document.createElement("div");
            artworkDiv.classList.add("artwork");

            const img = document.createElement("img");
            img.src = artwork.image;
            artworkDiv.appendChild(img);

            const buyBtn = document.createElement("button");
            buyBtn.innerText = "Comprar";
            buyBtn.classList.add("buy-btn");
            buyBtn.addEventListener("click", function () {
                alert("¡Imagen comprada!");
            });
            artworkDiv.appendChild(buyBtn);

            gallery.appendChild(artworkDiv);
        });
    }

    // Inicializa la galería
    renderGallery();

    // Obtiene el botón para agregar obras de arte
    const addArtworkBtn = document.getElementById("add-artwork-btn");

    // Agrega un evento click al botón para agregar obras de arte
    addArtworkBtn.addEventListener("click", function () {
        // Solicita al usuario que ingrese la URL de la imagen
        const image = prompt("Ingrese la URL de la imagen:");

        // Si se proporciona una URL, la agrega a la galería y actualiza localStorage
        if (image) {
            const artworks = JSON.parse(localStorage.getItem("artworks")) || [];
            artworks.push({ image });
            localStorage.setItem("artworks", JSON.stringify(artworks));
            // Vuelve a renderizar la galería con la nueva obra de arte
            renderGallery();
        }
    });
});
