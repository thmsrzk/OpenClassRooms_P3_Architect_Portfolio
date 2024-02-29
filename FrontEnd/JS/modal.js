import isLoggedIn from "./logout.js"
import { sophiesWork } from "./script.js";


//delete everything related to the modal if the user is not logged in
function removeModalRelatives() {
    if (!isLoggedIn()) {
        const elements = document.getElementsByClassName("modal-relative");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    } else {
        generateModalGallery(sophiesWork);
    }
}

removeModalRelatives();

//open and close the modal
const modal = document.querySelector("#modal");
const stopPropagation = function (e) {
    e.stopPropagation();
}

const openModal = function (e) {
    e.preventDefault();
    modal.style.display = null;
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-modale", 'true');
    modal.addEventListener("click", closeModal);
    modal.querySelector(".close-modal").addEventListener("click", closeModal);
    modal.querySelector(".modal-wrapper").addEventListener("click", stopPropagation);

}

const closeModal = function (e) { 
    e.preventDefault();
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("aria-modale");
    modal.removeEventListener("click", closeModal);
    modal.querySelector(".close-modal").removeEventListener("click", closeModal);
    modal.querySelector(".modal-wrapper").removeEventListener("click", stopPropagation);

}

document.querySelector(".open-modal").addEventListener("click", openModal);


// generate modal gallery
function generateModalGallery(sophiesWork) {
    for (let a = 0; a < sophiesWork.length; a++) {
        
        const galleryDiv = document.querySelector(".modal-gallery");

        const figureElement = document.createElement("figure");

        const imageElement = document.createElement("img");
        imageElement.src = sophiesWork[a].imageUrl;
        imageElement.alt = sophiesWork[a].title;

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.innerHTML = `<i class="fa-solid fa-trash"></i>`;


        galleryDiv.appendChild(figureElement);
        figureElement.append(imageElement, deleteButtonElement);

    }
}