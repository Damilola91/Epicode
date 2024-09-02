export const startLoadingPage = () => {
    const loaderDiv = document.createElement("div")
    loaderDiv.id="loader"
    loaderDiv.className="loader"
    const text = document.createElement("p")
    text.textContent="Loading"
    loaderDiv.appendChild(text)
    document.body.appendChild(loaderDiv)
}

export const stopLoadingPage = () => {
    document.getElementById("loader").remove()
}