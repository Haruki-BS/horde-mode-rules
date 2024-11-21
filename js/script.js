document.addEventListener("DOMContentLoaded", () => {
    // Navegación suave entre secciones
    const links = document.querySelectorAll("a[href^='#']");
    const highlightClass = "highlight";

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));

            // Desplazamiento suave
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Resaltado temporal
            target.classList.add(highlightClass);
            setTimeout(() => target.classList.remove(highlightClass), 2000);
        });
    });

    // Búsqueda dinámica
    const searchBar = document.getElementById("search-bar");
    const sections = document.querySelectorAll("section");

    if (searchBar) {
        searchBar.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();

            sections.forEach(section => {
                const text = section.innerText.toLowerCase();
                if (text.includes(query)) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    }

    const backToTopButton = document.getElementById("back-to-top");

    // Mostrar el botón cuando se hace scroll hacia abajo
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Mostrar después de 300px
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Desplazamiento suave hacia arriba al hacer clic
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
