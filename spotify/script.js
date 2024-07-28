const endPointApi = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;
const buttonSearch = document.getElementById("button-search");
const inputSearch = document.getElementById("searchField");
const containerResult = document.getElementById("eminemSection");

const searchSingers = () => {
    const singerName = inputSearch.value;
    const nameSingerUrl = `${endPointApi}${singerName}`
    return fetch(nameSingerUrl)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        containerResult.innerHTML = "";
        for (let i = 0; i < data.data.length; i++) {
            cardSingerResult(data.data[i])
        }
    })    
}

const cardSingerResult = (dataCard) => {
    const cardWrapper = document.createElement("div")
    cardWrapper.setAttribute("class", "card d-flex m-2")
    const cardTitle = document.createElement("h5")
    cardTitle.innerText = dataCard.title
    cardTitle.setAttribute("class", "card-title")
    const cardDescription = document.createElement("p")
    cardDescription.innerText = dataCard.title_version
    cardDescription.setAttribute("class", "card-text")
    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body ")
    const cardImg = document.createElement("img")
    cardImg.src = dataCard.album.cover_medium
    cardImg.setAttribute("class","card-img-top w-100")
    cardBody.append(cardTitle, cardDescription)
    containerResult.append(cardWrapper)
    cardWrapper.append(cardImg, cardBody)
}
