
const url = 'https://striveschool-api.herokuapp.com/books';
const inputSearchBooks = document.getElementById("search-books");
const divContainerCards = document.getElementById("cards-books");
const counterCart = document.getElementById("counterCart");
const cartIcon = document.getElementById("cartOffCanvas");
const quantityOffCanvas = document.getElementById("cartItemCount");
const cartContainer = document.getElementById("cartContainer"); // Aggiungi il contenitore per i prodotti nel carrello
let globalCounterCart = 0


const searchBooks = (event) => {
    event.preventDefault();
    const searchQuery = inputSearchBooks.value.trim();
    const urlBooks = `${url}?title=${searchQuery}`;

    fetch(urlBooks)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Errore nella risposta di rete: ' + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            divContainerCards.innerHTML = "";
            if (data.length > 0) {
                data.forEach(book => createBooksCards(divContainerCards, book));
            } else {
                divContainerCards.innerHTML = "<p>Nessun libro trovato.</p>";
            }
        })
        .catch((error) => {
            console.error('Si è verificato un errore:', error);
            divContainerCards.innerHTML = "<p>Si è verificato un errore durante la ricerca dei libri.</p>";
        });
};

const createBooksCards = (divToAppend, cardData) => {
    const divCardWrapper = document.createElement("div");
    divCardWrapper.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4");

    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

    const imgBook = document.createElement("img");
    imgBook.setAttribute("class", "card-img-top w-100");
    imgBook.src = cardData.img;

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerText = cardData.title;

    const price = document.createElement("p");
    price.setAttribute("class", "card-text");
    price.innerText = `€${cardData.price}`;

    const category = document.createElement("p");
    category.setAttribute("class", "card-text");
    category.innerText = cardData.category;

    const divContainerButtons = document.createElement("div")
    divContainerButtons.classList.add("d-flex")

    const buttonSalta = document.createElement("button");
    buttonSalta.setAttribute("class", "btn btn-warning custom");
    buttonSalta.innerText = "SALTA";

    const divButton = document.createElement("div");
    divButton.setAttribute("class", "card-footer text-center");

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-text");
    button.innerText = "ACQUISTA LIBRO";

    
    const buttonDettagli = document.createElement("a");
    buttonDettagli.setAttribute("href", `epicbookdetails.html?id=${cardData.asin}`);
    buttonDettagli.setAttribute("class", "btn btn-secondary custom");
    buttonDettagli.innerText = "DETTAGLI";

    divContainerButtons.append(buttonSalta, buttonDettagli)
    divButton.appendChild(button);
    cardBody.append(title, price, category);
    divCard.append(imgBook, cardBody, divContainerButtons, divButton); // Aggiungi il link dei dettagli
    divCardWrapper.append(divCard);
    divToAppend.append(divCardWrapper);

    // ADD EVENT LISTENER ON BUTTON OF PAGE CARDS
    button.addEventListener("click", () => {
        globalCounterCart++;
        counterCart.innerText = `${globalCounterCart}`;
        quantityOffCanvas.innerText = `${globalCounterCart}`;
        divCard.classList.add("opacity");
        button.innerText = "AGGIUNTO AL CARRELLO";
        addToCart(cardData, divCard);
    });

    // ADD EVENT LISTENER ON BUTTON SALTA
    buttonSalta.addEventListener("click", () => {
        divCardWrapper.remove();
    });
};

const addToCart = (cardData, originalCard) => {
    const cartCard = document.createElement("div");
    cartCard.setAttribute("class", "d-flex justify-content-between mb-2 border-bottom pb-2");

    const imgBook = document.createElement("img");
    imgBook.setAttribute("class", "w-25 modifyImg");
    imgBook.src = cardData.img;

    const cartCardBody = document.createElement("div");
    cartCardBody.setAttribute("class", "ms-3");

    const title = document.createElement("h5");
    title.setAttribute("class", "mb-1");
    title.innerText = cardData.title;

    const price = document.createElement("p");
    price.setAttribute("class", "mb-1");
    price.innerText = `£${cardData.price}`;

    const buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("class", "btn btn-secondary h-50");
    buttonRemove.innerText = "X";

    cartCardBody.append(title, price);
    cartCard.append(imgBook, cartCardBody, buttonRemove);
    cartContainer.appendChild(cartCard);

    // THIS BUTTON REMOVES THE CARD FROM THE OFFCANVAS
    buttonRemove.addEventListener("click", () => {
        if (globalCounterCart > 0) {
            globalCounterCart--;
            counterCart.innerText = `${globalCounterCart}`;
            quantityOffCanvas.innerText = `${globalCounterCart}`;
            originalCard.classList.remove("opacity");
            originalCard.querySelector(".btn-text").innerText = "ACQUISTA LIBRO";
            cartCard.remove();
        }
    });
};

document.getElementById('searchForm').addEventListener('submit', searchBooks);