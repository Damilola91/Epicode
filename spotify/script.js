const endPointApi = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;
const buttonSearch = document.getElementById("button-search");
const inputSearch = document.getElementById("searchField");
const containerResult = document.getElementById("searchResults");

const searchSingers = () => {
    const singerName = inputSearch.value;
    const nameSingerUrl = `${endPointApi}q=${singerName}`
    return fetch(nameSingerUrl)
    .then(data => data.json())
    .then(response => {
        console.log(response)
        cardSingerResult(response)
    })
    
}
 searchSingers()


const cardSingerResult = (data) => {
    
    containerResult.innerHTML = "";
    const cardWrapper = document.createElement("div")
    cardWrapper.setAttribute("class", "card")

    const cardTitle = document.createElement("h3")
    cardTitle.innerText = data.data.title
    cardTitle.setAttribute("class", "card-title")

    const cardDescription = document.createElement("p")
    cardDescription.innerText = data.data.
    cardDescription.setAttribute("class", "card-text")

    const cardImg = document.createElement("img")
    cardImg.src = data.data.md5_image

    containerResult.append(cardWrapper)
    cardWrapper.append(cardTitle, cardImg, cardDescription)
}
