document.addEventListener("DOMContentLoaded", function () {
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

            gallery.appendChild(artworkDiv);
        });
    }

    renderGallery();

    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-artwork-btn")) {
            const image = prompt("Ingrese la URL de la imagen:");
            if (image) {
                const artworks = JSON.parse(localStorage.getItem("artworks")) || [];
                artworks.push({ image });
                localStorage.setItem("artworks", JSON.stringify(artworks));
                renderGallery();
            }
        }
    });
});
