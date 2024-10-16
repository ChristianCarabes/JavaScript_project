    // Lista simulada de animes (cada anime tiene un título)
    const animes = [
        "Dragon Ball Z", "Evangelion", "Attack on Titan", 
        "Tokyo Revengers", "Kaiju No. 8", "Hell's Paradise", 
        "Gintama", "Naruto", "One Piece", "Tower of God", 
        "My Hero Academia", "Demon Slayer", "The Promised Neverland", 
        "Jujutsu Kaisen", "Assassination Classroom", "Overlord"
    ];

    // Lista de favoritos (inicialmente vacía)
    let favorites = [];

    // Simulamos la interacción de agregar animes a favoritos
    function saveToFavorites(anime) {
        if (!favorites.includes(anime)) {
            favorites.push(anime);
            console.log(`${anime} agregado a tus favoritos.`);
        } else {
            console.log(`${anime} ya está en tus favoritos.`);
        }
    }

    //Guardar cada anime en favoritos
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

