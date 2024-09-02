const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlZmZlNDAwOGQxMDAwMTVkZDNiNDciLCJpYXQiOjE3MjQ4NDE5NTYsImV4cCI6MTcyNjA1MTU1Nn0.c9zx94lCxMQ9B46V8d9dR-zHBzKEsokK6gQ59fDe0Jg"
const detailsSection = document.getElementById("details")
const url = new URLSearchParams(location.search); 
const id = url.get('id');

const detailsFetch = async () => {
    try {
        const response = await fetch(endPoint + id, {
           headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
           
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        console.log(result);

        detailsCard(result, detailsSection)

    } catch (error) {
        console.error('Fetch error:', error);
        
    }
}

detailsFetch()

const detailsCard = (cardData, toAppend) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("src", cardData.imageUrl);
    img.setAttribute("alt", cardData.name);

    const name = document.createElement("h2");
    name.textContent = cardData.name;

    const description = document.createElement("p");
    description.textContent = cardData.description;

    const brand = document.createElement("p");
    brand.innerHTML = `<strong>Brand:</strong> ${cardData.brand}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price:</strong> ${cardData.price}`;
   
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(brand);
    card.appendChild(price);


    toAppend.appendChild(card);

}