const endPoint = "https://striveschool-api.herokuapp.com/api/product/";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlZmZlNDAwOGQxMDAwMTVkZDNiNDciLCJpYXQiOjE3MjQ4NDE5NTYsImV4cCI6MTcyNjA1MTU1Nn0.c9zx94lCxMQ9B46V8d9dR-zHBzKEsokK6gQ59fDe0Jg";
const containerElement = document.getElementById("get");
const buttonShop = document.getElementById("vetrina")

const dataFetch = async () => {
  try {
    const response = await fetch(endPoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const result = await response.json();
    console.log(result);

    result.forEach((product) => cardEditable(product, containerElement));
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

dataFetch();

const cardEditable = (dataCard, posizione) => {
  const cardWrap = document.createElement("div");
  const card = document.createElement("div");
  const imgCard = document.createElement("img");
  const boxText = document.createElement("div");
  const titleCard = document.createElement("h5");
  const priceProduct = document.createElement("p");
  const descriptionCard = document.createElement("p");
  const divButtons = document.createElement("div");
  const buttonChange = document.createElement("button");
  const buttonDelete = document.createElement("button");

  // Aggiunta delle classi con Bootstrap
  cardWrap.classList.add("col-lg-4", "col-md-6", "mb-4");
  card.classList.add("card", "h-100", "shadow-sm", "rounded"); // Aggiunto h-100 per assicurare stessa altezza
  imgCard.classList.add("card-img-top");
  boxText.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");
  titleCard.classList.add("card-title", "text-center", "font-weight-bold");
  descriptionCard.classList.add("card-text", "mb-2");
  priceProduct.classList.add("card-price", "text-primary", "font-weight-bold", "text-center", "mb-4");
  divButtons.classList.add("d-flex", "justify-content-between", "mt-auto");
  buttonChange.classList.add("btn", "btn-warning");
  buttonDelete.classList.add("btn", "btn-danger");

  // Impostazione dei contenuti
  titleCard.innerText = dataCard.name;
  priceProduct.innerText = `$${dataCard.price}`;
  descriptionCard.innerText = dataCard.description;
  imgCard.src = dataCard.imageUrl;
  imgCard.alt = `Image of ${dataCard.name}`;
  buttonChange.innerText = "Edit";
  buttonDelete.innerText = "Delete";

  // Costruzione della struttura della card
  divButtons.append(buttonChange, buttonDelete);
  boxText.append(titleCard, priceProduct, descriptionCard, divButtons);
  card.append(imgCard, boxText);
  cardWrap.appendChild(card);
  posizione.appendChild(cardWrap);

  // Gestione della cancellazione con SweetAlert
  buttonDelete.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (dataCard._id) {
            deleteCard(dataCard._id, cardWrap);
          }
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  });

  buttonChange.addEventListener("click", () => {
    window.location.href = "./editcard.html?id=" + dataCard._id;
  });
};

const deleteCard = async (id, cardWrap) => {
  try {
    const response = await fetch(`${endPoint}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const result = await response.json();
    console.log(result);

    // Rimuovi la carta dal DOM
    cardWrap.remove();
  } catch (error) {
    console.error("Delete error:", error);
  }
};

buttonShop.addEventListener("click", () => {
  window.location.href="./market.html"
})