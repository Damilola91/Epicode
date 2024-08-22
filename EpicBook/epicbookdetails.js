const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

const fetchBookDetails = () => {
    const url = `https://striveschool-api.herokuapp.com/books/${bookId}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella risposta di rete: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const bookDetails = document.getElementById('book-details');
            bookDetails.innerHTML = "";
            card(data, bookDetails)
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
            const bookDetails = document.getElementById('book-details');
            bookDetails.innerHTML = "<p>Si è verificato un errore durante il recupero dei dettagli del libro.</p>";
        });
};



const card = (cardData, divToAppend) => {
    const cardWrapper = document.createElement("div")
    cardWrapper.classList.add("d-flex", "justify-content-center")
    const divCard = document.createElement("div")
    divCard.classList.add("card", "m-2")
    const cardTitle = document.createElement("h6")
    cardTitle.innerText = cardData.title
    const img = document.createElement("img")
    img.classList.add("card-img", "w-100", "h-100", "object-fit-cover")
    img.src = cardData.img
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body", "bg-black", "text-white")
    const cardPrice = document.createElement("p")
    cardPrice.classList.add("card-text")
    cardPrice.innerText = `£${cardData.price}`
    const cardDescription = document.createElement("p")
    cardDescription.classList.add("card-text")
    cardDescription.innerText = cardData.category
    cardBody.append(cardDescription, cardPrice)
    divCard.append(cardTitle, img, cardBody)
    cardWrapper.appendChild(divCard)
    divToAppend.appendChild(cardWrapper)
  
  }
  window.onload = fetchBookDetails;
