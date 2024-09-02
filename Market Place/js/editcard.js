const endPoint = "https://striveschool-api.herokuapp.com/api/product/";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlZmZlNDAwOGQxMDAwMTVkZDNiNDciLCJpYXQiOjE3MjQ4NDE5NTYsImV4cCI6MTcyNjA1MTU1Nn0.c9zx94lCxMQ9B46V8d9dR-zHBzKEsokK6gQ59fDe0Jg";
const url = new URLSearchParams(location.search);
const id = url.get('id');
const editButton = document.getElementById("button");
const backEndButton = document.getElementById("button2")

const fillForm = async () => {
    try {
        const response = await fetch(endPoint + id, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const dati = await response.json();

        document.getElementById("name").value = dati.name;
        document.getElementById("description").value = dati.description;
        document.getElementById("brand").value = dati.brand;
        document.getElementById("price").value = dati.price;
        document.getElementById("image").value = dati.imageUrl;

    } catch (error) {
        console.error('Fetch error:', error);
    }
};

fillForm();

const updateData = async (e) => {
    e.preventDefault();

    const inputNameProduct = document.getElementById("name").value;
    const inputDescriptionProduct = document.getElementById("description").value;
    const inputBrandProduct = document.getElementById("brand").value;
    const inputImgProduct = document.getElementById("image").value;
    let inputPriceProduct = document.getElementById("price").value;
    const priceValue = Number(inputPriceProduct);

    
    const marketProduct = {
        name: inputNameProduct,
        description: inputDescriptionProduct,
        brand: inputBrandProduct,
        imageUrl: inputImgProduct,
        price: priceValue
    };

    try {
        const response = await fetch(endPoint + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify(marketProduct)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        console.log(result);

       

        window.location.href=""
    } catch (error) {
        console.error('Fetch error:', error);
        
    }
};

editButton.addEventListener('click', (event) => {
    event.preventDefault()
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            updateData(event)
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });

});

backEndButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href="./BackEnd.html"
})
