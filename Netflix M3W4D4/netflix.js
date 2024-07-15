//funzione swiper
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 15,
    breakPoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }

    }
})

// funzione per mostrare la sezione
const hideSection = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;
 

const showSection = (actualScrollPosition) => {
    if (actualScrollPosition > 100) {
        console.log("funzione eseguita");
        hideSection.classList.remove("hide-section")
    }else{
        (actualScrollPosition < 100)
        hideSection.classList.add("hide-section")
    }

}


document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    showSection(lastKnownScrollPosition)
})

//funzione per creare l'input al click del ion icon search-outline
const divContainerSearch = document.getElementById("searchContainer");
const a = document.getElementById("search-icon");

const createInput = () => {
    let containerInput = document.querySelector("#searchContainer input");

    if(!containerInput) {
        input = document.createElement("input");
        input.setAttribute("type", "text");
        divContainerSearch.insertBefore(input, a);
    } else {
        containerInput.remove()
    }
};

a.addEventListener("click", createInput);


//array per le cards dello swiper
const cards = {
    trending: [{
        title: 'Unorthodox',
        img: './movies/1.png',
        duration: '4h 16 m'
    },
        {
            title: 'After Life',
            img: './movies/2.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'VISaVIS',
        img: './movies/3.png',
        duration: '4h 16 m'
       
        },
        {
            title: 'The Place',
            img: './movies/4.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'Summertime',
        img: './movies/5.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'I delitti di valhalla',
        img: './movies/6.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'Grace',
        img: './movies/7.png',
        duration: '4h 16 m'
      
        },
        {
            title: 'Virginia River',
        img: './movies/8.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'The English Game',
        img: './movies/9.png',
        duration: '4h 16 m'
        
        },
    
    ],
    watch: [{
        title: 'Il metodo Kominsky',
        img: './movies/10.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'Patto d amore',
            img: './movies/11.png',
            duration: '4h 16 m'
            
        },

        {
            title: 'La casa de LAS Flores',
            img: './movies/12.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'Collateral beauty',
            img: './movies/13.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'Self-Made',
            img: './movies/14.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'The Place',
            img: './movies/4.png',
            duration: '4h 16 m'
           
        },
        {
            title: ' Freud',
            img: './movies/15.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'Grace and Frankie',
            img: './movies/16.png',
            duration: '4h 16 m'
          
        },
        {
            title: 'Lasciati andare ',
            img: './movies/17.png',
            duration: '4h 16 m'
          
        },
    ],

   new: [
        {
            title: 'DogMan',
            img: './movies/18.png',
            duration: '4h 16 m'
           
        },

        {
            title: 'Freud',
            img: './movies/15.png',
            duration: '4h 16 m'
          
        },

        {
            title: 'Lasciati andare ',
            img: './movies/17.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'Il metodo Kominsky',
            img: './movies/10.png',
            duration: '4h 16 m'
          
        },
        {
            title: 'After Life',
            img: './movies/2.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'Virginia River',
            img: './movies/8.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'The English Game',
            img: './movies/9.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'Unorthodox',
            img: './movies/1.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'Self-Made',
            img: './movies/14.png',
            duration: '4h 16 m'
           
        },


    ],

    action: [{
        title: 'Il metodo Kominsky',
        img: './movies/10.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'Patto d amore',
            img: './movies/11.png',
            duration: '4h 16 m'
            
        },

        {
            title: 'La casa de LAS Flores',
            img: './movies/12.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'Collateral beauty',
            img: './movies/13.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'Self-Made',
            img: './movies/14.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'The Place',
            img: './movies/4.png',
            duration: '4h 16 m'
           
        },
        {
            title: ' Freud',
            img: './movies/15.png',
            duration: '4h 16 m'
           
        },
        {
            title: 'Grace and Frankie',
            img: './movies/16.png',
            duration: '4h 16 m'
          
        },
        {
            title: 'Lasciati andare ',
            img: './movies/17.png',
            duration: '4h 16 m'
          
        },
    ],
    thriller: [{
        title: 'Unorthodox',
        img: './movies/1.png',
        duration: '4h 16 m'
    },
        {
            title: 'After Life',
            img: './movies/2.png',
            duration: '4h 16 m'   
        },
        {
        title: 'VISaVIS',
        img: './movies/3.png',
        duration: '4h 16 m'
       
        },
        {
            title: 'The Place',
            img: './movies/4.png',
            duration: '4h 16 m'
            
        },
        {
        title: 'Summertime',
        img: './movies/5.png',
        duration: '4h 16 m'
        
        },
        {
        title: 'I delitti di valhalla',
        img: './movies/6.png',
        duration: '4h 16 m'
        
        },
        {
        title: 'Grace',
        img: './movies/7.png',
        duration: '4h 16 m'
      
        },
        {
            title: 'Virginia River',
        img: './movies/8.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'The English Game',
        img: './movies/9.png',
        duration: '4h 16 m'
        
        },
    
    ],
    reality: [{
        title: 'Unorthodox',
        img: './movies/1.png',
        duration: '4h 16 m'
    },
        {
            title: 'After Life',
            img: './movies/2.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'VISaVIS',
        img: './movies/3.png',
        duration: '4h 16 m'
       
        },
        {
            title: 'The Place',
            img: './movies/4.png',
            duration: '4h 16 m'
            
        },
        {
            title: 'Summertime',
        img: './movies/5.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'I delitti di valhalla',
        img: './movies/6.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'Grace',
        img: './movies/7.png',
        duration: '4h 16 m'
      
        },
        {
            title: 'Virginia River',
        img: './movies/8.png',
        duration: '4h 16 m'
        
        },
        {
            title: 'The English Game',
        img: './movies/9.png',
        duration: '4h 16 m'
        
        },
    
    ]
}

//funzione per creare carte dello swiper
const cardsContainer = document.getElementById("trending")

const createCard = (cardData, containerToAppend) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.setAttribute("class", "swiper-slide");
    const filmCard = document.createElement("div");
    filmCard.setAttribute("class", "film-card gap-1 shadow-sm")
    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top object-fit-cover");
    cardImg.setAttribute("src", cardData.img);
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body text-white bg-dark");
    cardBody.style.display = "none";
    const cardTitle = document.createElement("h5");
    cardTitle.innerText = cardData.title;
    cardTitle.setAttribute("class", "card-title");
    const ionIconDiv = document.createElement("div");
    ionIconDiv.setAttribute("class", "d-flex gap-2");
    const ionIconBack = document.createElement("ion-icon");
    ionIconBack.setAttribute("name", "play-skip-back-circle")
    const ionIconPlay = document.createElement("ion-icon");
    ionIconPlay.setAttribute("name", "play-circle")
    const ionIconForward = document.createElement("ion-icon");
    ionIconForward.setAttribute("name", "play-skip-forward-circle")
    const durationP = document.createElement("p");
    durationP.textContent = cardData.duration;
    ionIconDiv.append(ionIconBack, ionIconPlay, ionIconForward);
    cardBody.append(cardTitle, ionIconDiv, durationP);
    filmCard.append(cardImg, cardBody);
    swiperSlide.appendChild(filmCard);
    containerToAppend.appendChild(swiperSlide);

    filmCard.addEventListener("mouseover", () => {
        cardBody.style.display = "block"; 
    });

    filmCard.addEventListener("mouseout", () => {
        cardBody.style.display = "none"; 
    });

}

cards.trending.forEach(card => {
    createCard(card, cardsContainer);
})

const secondCardsContainer = document.getElementById("watch")


cards.watch.forEach(card => {
    createCard(card, secondCardsContainer);
})

const thirdCardsContainer = document.getElementById("new-releases")

cards.new.forEach(card => {
    createCard(card, thirdCardsContainer);
})


const fourthCardsContainer = document.getElementById("action")

cards.action.forEach(card => {
    createCard(card, fourthCardsContainer);
})

const fifthCardsContainer = document.getElementById("thriller")

cards.thriller.forEach(card => {
    createCard(card, fifthCardsContainer)
})
 
const sixthCardsContainer = document.getElementById("reality")

cards.reality.forEach(card => {
    createCard(card, sixthCardsContainer);
} )

//funzione per creare carte della sidebar quando si mostra negli smartphone
const cardsNascoste = {
    hidden: [{
        title: 'Unorthodox',
        img: './movies/1.png',
    },
    {
        title: 'After Life',
        img: './movies/2.png',
            
    }
  ],
  hidden2: [{
    title: 'The English Game',
    img: './movies/9.png',
},
{
    title: 'I delitti di valhalla',
    img: './movies/6.png',
        
}
],
hidden3: [{
    title: 'The Place',
    img: './movies/4.png',
},
{
    title: 'VISaVIS',
    img: './movies/3.png',
        
},
]
}

const containerCardsNascoste = document.getElementById("carte-nascoste")

const createCard2 = (cardData, appendTo) => {
    const divCardContainer = document.createElement("div");
    divCardContainer.setAttribute("class", "col-6 d-flex justify-content-center");
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class","card gap-1 shadow-sm")
    const imgCard = document.createElement("img");
    imgCard.setAttribute("class", "card-img-top object-fit-cover");
    imgCard.setAttribute("src", cardData.img);
    const bodyCard = document.createElement("div");
    bodyCard.setAttribute("class", "card-body text-white bg-dark");
    const titleCard = document.createElement("h5");
    titleCard.innerText = cardData.title;
    titleCard.setAttribute("class", "card-title");
    bodyCard.appendChild(titleCard);
    cardContainer.append(imgCard, bodyCard);
    divCardContainer.appendChild(cardContainer);
    appendTo.appendChild(divCardContainer);

}

cardsNascoste.hidden.forEach(card => {
    createCard2(card, containerCardsNascoste);
})


const containerCardsNascoste2 = document.getElementById("carte-nascoste2")

cardsNascoste.hidden2.forEach(card => {
    createCard2(card, containerCardsNascoste2);
})

const containerCardsNascoste3 = document.getElementById("carte-nascoste3")

cardsNascoste.hidden3.forEach(card =>{
    createCard2(card, containerCardsNascoste3)
})

