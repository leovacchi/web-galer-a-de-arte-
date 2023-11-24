document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");

    const gallery = document.getElementById("gallery");

    function renderGallery() {
        gallery.innerHTML = "";
        const artworks = JSON.parse(localStorage.getItem("artworks")) || [];

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

    renderGallery();

    const addArtworkBtn = document.getElementById("add-artwork-btn");
    addArtworkBtn.addEventListener("click", function () {
        const image = prompt("Ingrese la URL de la imagen:");
        if (image) {
            const artworks = JSON.parse(localStorage.getItem("artworks")) || [];
            artworks.push({ image });
            localStorage.setItem("artworks", JSON.stringify(artworks));
            renderGallery();
        }
    });
});
