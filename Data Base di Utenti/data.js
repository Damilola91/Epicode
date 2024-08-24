const ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

const textElement = document.getElementById("text");
const filterSelect = document.getElementById("filterSelect");
const input = document.getElementById("search");


const loadData = async () => {
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    console.log(result);

    //Serve per mantanere i dati caricati globalmente
    window.userData = result;
};

// Funzione per mostrare le card filtrate
const displayCards = (data, filter, searchTerm) => {
    
    textElement.innerHTML = '';

   
    data.forEach(loginData => {
        const { email, name, username } = loginData;
        const lowerSearchTerm = searchTerm.toLowerCase(); // Converti il termine di ricerca in minuscolo

        if (filter === 'email' && email.toLowerCase().includes(lowerSearchTerm)) {
            card(`Email: ${email}`, textElement);
        } else if (filter === 'username' && username.toLowerCase().includes(lowerSearchTerm)) {
            card(`Username: ${username}`, textElement);
        } else if (filter === 'name' && name.toLowerCase().includes(lowerSearchTerm)) {
            card(`Name: ${name}`, textElement);
        }
    });
};


const card = (cardData, divToAppend) => {
    if (cardData && divToAppend) {
        const divCard = document.createElement("div");
        divCard.classList.add("card", "col-12");
        divCard.innerText = cardData;
        divToAppend.appendChild(divCard);
    }
};

// Event listener per il cambiamento della selezione
filterSelect.addEventListener('change', () => {
    const selectedValue = filterSelect.value;
    const searchTerm = input.value; // Ottiene il testo dall'input di ricerca
    if (window.userData) {
        displayCards(window.userData, selectedValue, searchTerm);
    }
});

// Event listener per l'input di ricerca
input.addEventListener('input', () => {
    const selectedValue = filterSelect.value; //Qui ottengo il valre selezionato
    const searchTerm = input.value;
    if (window.userData) {
        displayCards(window.userData, selectedValue, searchTerm);
    }
});

loadData();


