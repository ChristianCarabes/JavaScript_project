    
    const animes = [
        "Dragon Ball Z", "Evangelion", "Attack on Titan", 
        "Tokyo Revengers", "Kaiju No. 8", "Hell's Paradise", 
        "Gintama", "Naruto", "One Piece", "Tower of God", 
        "My Hero Academia", "Demon Slayer", "The Promised Neverland", 
        "Jujutsu Kaisen", "Assassination Classroom", "Overlord"
    ];

    
    let favorites = [];

    
    function saveToFavorites(anime) {
        if (!favorites.includes(anime)) {
            favorites.push(anime);
            console.log(`${anime} agregado a tus favoritos.`);
        } else {
            console.log(`${anime} ya está en tus favoritos.`);
        }
    }

    
    function simulateSavingAnimes() {
        for (let i = 0; i < animes.length; i++) {
            let randomDecision = Math.random(); // Valor aleatorio para simular decisiones del usuario
            if (randomDecision > 0.5) {
                saveToFavorites(animes[i]);
            } else {
                console.log(`El usuario no guardó ${animes[i]}.`);
            }
        }
    }

    
    simulateSavingAnimes();


    console.log("Lista de favoritos: ", favorites);



document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const searchQuery = document.querySelector("input[type='text']").value.toLowerCase();
    const animeTitles = document.querySelectorAll(".tarjeta h3");
    
    animeTitles.forEach(title => {
        if (title.textContent.toLowerCase().includes(searchQuery)) {
            title.closest(".col-md-4").style.display = "block";
        } else {
            title.closest(".col-md-4").style.display = "none";
        }
    });
});


function showCurrentDateTime() {
    const dateContainer = document.createElement("div");
    dateContainer.className = "date-container";
    document.body.prepend(dateContainer);
    
    setInterval(() => {
        const now = new Date();
        dateContainer.textContent = `Fecha y Hora Actual: ${now.toLocaleString()}`;
    }, 1000);
}
showCurrentDateTime();


function recommendRandomAnime() {
    const animeTitles = document.querySelectorAll(".tarjeta h3");
    const randomIndex = Math.floor(Math.random() * animeTitles.length);
    alert(`¡Recomendación del día! Mira ${animeTitles[randomIndex].textContent}`);
}

const navContainer = document.querySelector(".nav-2");
const recommendButton = document.createElement("li");
recommendButton.classList.add("nav-item-4");
recommendButton.innerHTML = `<button class="btn btn-primary">Recomendar Anime</button>`;
navContainer.appendChild(recommendButton);


recommendButton.addEventListener("click", recommendRandomAnime);


