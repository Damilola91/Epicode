const arrayCards =  {
    holidays: [{
        title: 2.75,
        rating:'· 4 ratings',
        img: './assets2/pexels1.jpg',
        duration: 'Apartment · Genova',
        description: 'Wonderful House'
    },
        {
            title: '',
            rating:'0 ratings',
            img: './assets2/pexels2.jpg',
            duration: 'Apartment · Genova',
            description: 'Wonderful House'
            
            
        },
        {
            title: '',
            rating:'0 ratings',
            img: './assets2/pexels3.jpg',
            duration: 'Apartment · Genova',
            description: 'Wonderful House'
       
        },
        {
            title: '',
            rating:'0 ratings',
            img: './assets2/pexels4.jpg',
            duration: 'Apartment · Genova',
            description: 'Wonderful House'
            
        },
        {
        title: '',
        rating:'0 ratings',
        img: './assets2/pexels5.jpg',
        duration: 'Apartment · Genova',
        description: 'Wonderful House'
        
        },
       
    ]
}


const divSection = document.getElementById("ciao");

const createCard = (cardData, divToAppend) => {

    const flexBox = document.createElement("div");
    flexBox.setAttribute("class", "d-flex");
    const card = document.createElement("div");
    card.setAttribute("class", "card border-0");
    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top rounded-4 object-fit-cover banana");
    cardImg.setAttribute("src", cardData.img);
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body pt-1 border-0");
    const divStarTitle = document.createElement("div");
    divStarTitle.setAttribute("class", "d-flex gap-2 align-items-center");
    const iconStar = document.createElement("ion-icon")
    iconStar.setAttribute("name","star");
    iconStar.setAttribute("class", "text-danger")
    const cardTitle = document.createElement("p");
    cardTitle.innerText = cardData.title;
    cardTitle.setAttribute("class", "card-title m-0 fw-bold");
    const ratingCard = document.createElement("p");
    ratingCard.textContent = cardData.rating;
    ratingCard.setAttribute("class", "m-0")
    const durationP = document.createElement("p");
    durationP.textContent = cardData.duration;
    durationP.setAttribute("class", "mb-0")
    const descriptionCard = document.createElement("p");
    descriptionCard.textContent = cardData.description;
    divStarTitle.append(iconStar, cardTitle, ratingCard);
    cardBody.append(divStarTitle, durationP, descriptionCard);
    card.append(cardImg, cardBody);
    flexBox.appendChild(card);
    divToAppend.appendChild(flexBox);


    

}

arrayCards.holidays.forEach(card => {
    createCard(card, divSection)
})

