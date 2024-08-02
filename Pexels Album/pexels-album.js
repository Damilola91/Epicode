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

const API_KEY = "LRFW92HbxT0aa5FBHbZAIVaCEdfRE9EdX5FVNFKfwprTwVRUkZAzblcc";
const endPointApiPexels = `https://api.pexels.com/v1/search?query=`;
const inputSearch = document.getElementById("searchField");
const containerResult = document.getElementById("landscape");
const containerResult2 = document.getElementById("cani");

const searchPicture = () => {
  const pictureName = inputSearch.value;
  const namePictureUrl = `${endPointApiPexels}${pictureName}`;
  return fetch(namePictureUrl, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      
      containerResult.innerHTML = "";
      for (let i = 0; i < data.photos.length; i++) {
        cardPicture(data.photos[i])
        
    }
      
    })
    //.catch((error) => console.log(error));
};

const cardPicture = (cardData) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.setAttribute("class", "swiper-slide");
  const pictureCard = document.createElement("div");
  pictureCard.setAttribute("class", "card gap-1 shadow-sm");
  const cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img object-fit-cover w-100 h-100");
  cardImg.src = cardData.src.original;
  pictureCard.appendChild(cardImg);
  swiperSlide.appendChild(pictureCard);
  containerResult.append(swiperSlide);
}

const query = "dog"

const fetchPhoto = () => {
  return fetch(`${endPointApiPexels}${query}`, {
    headers: {
      Authorization: API_KEY,
    },
  })
  .then(data => data.json())
  .then(response => {
    console.log(response)
    const generatePhotos = response.photos.map(picture => cardPicture2(picture.src.original))
    return generatePhotos;
    
  })
}


const cardPicture2 = (dataCard) => {
  const cardWrapper = document.createElement("div")
  cardWrapper.setAttribute("class", "col-4 d-flex")
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  const img = document.createElement("img");
  img.setAttribute("class", "card-img object-fit-cover w-100 h-100");
  img.src = dataCard
  card.appendChild(img)
  cardWrapper.appendChild(card)
  containerResult2.append(cardWrapper)
}


