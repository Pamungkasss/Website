$(document).ready(function() {
    muatFilm();
});

function muatFilm() {
    const trendingMovies = [
        { judul: "JOKER", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/aecd8480-67db-49cb-863e-d4b1c0d82929-600x885.webp" },
        { judul: "KUASA GELAP", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/1f019ecb-de0c-44eb-b854-3da07a468e12.webp" }, 
        { judul: "SUMALA", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/4b62ae255cee499fa67091cc09970c65-600x885.jpg" },
        { judul: "KUPU KUPU KETRAS", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/c0eeb58b-90fa-4304-a60f-e222c77b237c-600x885.webp" },
        { judul: "PANDA PLAN", gambar: "https://asset.tix.id/wp-content/uploads/2024/10/5e4b3c94-b9c6-487a-bf59-5c511fbf5396.webp" },      
        { judul: "LAUT TENGAH", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/c9eaf4cefda54e7b97f6ae9e5a5a1447.jpg" } 
    ];

    const latestMovies = [
        { judul: "LEMBAYUNG", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/c258f5cf-d18f-41e1-a0d9-036cc4b872a2-600x885.webp" },
        { judul: "PANDA PLAN", gambar: "https://asset.tix.id/wp-content/uploads/2024/10/5e4b3c94-b9c6-487a-bf59-5c511fbf5396.webp" },
        { judul: "KUPU KUPU KETRAS", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/c0eeb58b-90fa-4304-a60f-e222c77b237c-600x885.webp" },
        { judul: "SUMALA", gambar: "https://asset.tix.id/wp-content/uploads/2024/09/4b62ae255cee499fa67091cc09970c65-600x885.jpg" },
        { judul: "I AM STILL", gambar: "https://asset.tix.id/wp-content/uploads/2024/08/061acf0e-21e4-44ff-9431-6ee99f9a8f02.webp" }, 
    ];

    tampilkanFilm('#trending-movies', trendingMovies);
    tampilkanFilm('#latest-movies', latestMovies);
}

function tampilkanFilm(container, movies) {
    movies.forEach(film => {
        const movieItem = `
            <div class="movie-item">
                <img src="${film.gambar}" alt="${film.judul}">
                <p>${film.judul}</p>
            </div>
        `;
        $(container).append(movieItem);
    });
}

function cariFilm() {
    const nilaiCari = $('#search-input').val().toLowerCase();

    $('.movie-item').each(function() {
        const judul = $(this).find('p').text().toLowerCase();
        if (judul.includes(nilaiCari)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
