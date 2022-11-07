let delay = 0
document.querySelector("#cards").innerHTML = 
        createCardDom("20/11", "Domingo", createGame("Qatar", "Equador", "12:00")) + 
        createCardSeg("21/11", "Segunda-feira", 
        createGame("Inglaterra", "Iran", "09:00"), 
        createGame("Senegal", "Holanda", "12:00"), 
        createGame("Estados Unidos", "Gales", "15:00")) +
        createCard("22/11", "Terça-feira", 
        createGame("Argentina", "Arabia", "06:00"),
        createGame("Dinamarca", "Tunisia", "09:00"),
        createGame("Mexico", "Polonia", "12:00"),
        createGame("França", "Australia", "15:00")) +
        createCard("23/11", "Quarta-feira", 
        createGame("Marrocos", "Grecia", "06:00"),
        createGame("Alemanha", "Japao", "09:00"),
        createGame("Espanha", "CostaRica", "12:00"),
        createGame("Belgica", "Canada", "15:00")) +
        createCard("24/11", "Quinta-feira", 
        createGame("Suiça", "Camaroes", "06:00"),
        createGame("Uruguai", "CoreiaDoSul", "09:00"),
        createGame("Portugal", "Ghana", "12:00"),
        createGame("Brasil", "Servia", "15:00")) +
        createCard("25/11", "Sexta-feira", 
        createGame("Gales", "Iran", "06:00"),
        createGame("Qatar", "Senegal", "09:00"),
        createGame("Holanda", "Equador", "12:00"),
        createGame("Inglaterra", "Estados Unidos", "15:00")) +
        createCard("26/11", "Sabado", 
        createGame("Tunisia", "Australia", "06:00"),
        createGame("Polonia", "Arabia", "09:00"),
        createGame("França", "Dinamarca", "12:00"),
        createGame("Argentina", "Mexico", "15:00")) +
        createCard("27/11", "Domingo", 
        createGame("Japao", "CostaRica", "06:00"),
        createGame("Belgica", "Marrocos", "09:00"),
        createGame("Croacia", "Canada", "12:00"),
        createGame("Espanha", "Alemanha", "15:00")) +
        createCard("28/11", "Segunda-feira", 
        createGame("Camaroes", "Servia", "06:00"),
        createGame("CoreiaDoSul", "Ghana", "09:00"),
        createGame("Brasil", "Suiça", "12:00"),
        createGame("Portugal", "Uruguai", "15:00")) +
        createCard("29/11", "Terça-feira", 
        createGame("Equador", "Senegal", "06:00"),
        createGame("Holanda", "Qatar", "09:00"),
        createGame("Iran", "Estados Unidos", "12:00"),
        createGame("Gales", "Inglaterra", "15:00")) +
        createCard("30/11", "Quarta-feira", 
        createGame("Tunisia", "França", "06:00"),
        createGame("Australia", "Dinamarca", "09:00"),
        createGame("Polonia", "Argentina", "12:00"),
        createGame("Arabia", "Mexico", "15:00")) +
        createCard("01/12", "Quinta-feira", 
        createGame("Croacia", "Belgica", "06:00"),
        createGame("Canada", "Marrocos", "09:00"),
        createGame("Japao", "Espanha", "12:00"),
        createGame("CostaRica", "Alemanha", "15:00")) +
        createCard("02/12", "Sexta", 
        createGame("CoreiaDoSul", "Portugal", "06:00"),
        createGame("Ghana", "Uruguai", "09:00"),
        createGame("Servia", "Suiça", "12:00"),
        createGame("Camaroes", "Brasil", "15:00")) 
;

function createCardDom(data, dia, jogo){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${dia}</span></h2>
            <ul>
                ${jogo}
            </ul>
        </div>
    `
}

function createCardSeg(data, dia, jogo1, jogo2, jogo3){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${dia}</span></h2>
            <ul>
                ${jogo1}
                ${jogo2}
                ${jogo3}
            </ul>
        </div>
    `
}
function createCard(data, dia, jogo1, jogo2, jogo3, jogo4){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${dia}</span></h2>
            <ul>
                ${jogo1}
                ${jogo2}
                ${jogo3}
                ${jogo4}
            </ul>
        </div>
    `
};

function createGame(time1, time2, hora){
    return `
        <li>
            <img src="./media/${time1}.svg" alt="${time1}">    
            <strong>${hora}</strong>
            <img src="./media/${time2}.svg" alt="${time2}">
        </li>
    `
}

    
