import { startLoadingPage, stopLoadingPage } from "./loader.js";

const APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlZmZlNDAwOGQxMDAwMTVkZDNiNDciLCJpYXQiOjE3MjQ4NDE5NTYsImV4cCI6MTcyNjA1MTU1Nn0.c9zx94lCxMQ9B46V8d9dR-zHBzKEsokK6gQ59fDe0Jg";
const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const buttonProduct = document.getElementById("button");
const buttonBackEnd = document.getElementById("backEnd")
const buttonVetrina = document.getElementById("vetrina")

buttonProduct.addEventListener("click", event => {
    event.preventDefault();
    
    const inputNameProduct = document.getElementById("name");
    const inputDescriptionProduct = document.getElementById("description");
    const inputBrandProduct = document.getElementById("brand");
    const inputPriceProduct = document.getElementById("price");
    const inputImgProduct = document.getElementById("image");

    const name = inputNameProduct.value;
    const description = inputDescriptionProduct.value;
    const brand = inputBrandProduct.value;
    const price = inputPriceProduct.value;
    const image = inputImgProduct.value;

    if (!name || !description || !brand || !image || !price) {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Please fill in all the fields",
            showConfirmButton: true,
        });
        return;
    }

    const marketProduct = {
        name,
        description,
        brand,
        imageUrl: image,
        price: Number(price)
    };

    startLoadingPage();

    const uploadData = async () => {
        try {
            const response = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${APIKEY}`
                },
                body: JSON.stringify(marketProduct)
            });
            const result = await response.json();
            stopLoadingPage();
            console.log(result);

            // Svuota i campi del modulo dopo aver creato il prodotto
            inputNameProduct.value = "";
            inputDescriptionProduct.value = "";
            inputBrandProduct.value = "";
            inputImgProduct.value = "";
            inputPriceProduct.value = "";

            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });

        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    uploadData();
});


buttonBackEnd.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href="./BackEnd.html"
});

buttonVetrina.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href="./market.html"
});