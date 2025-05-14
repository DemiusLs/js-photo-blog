//Utilizzo axios per richiesta Ajax
const url = "https://lanciweb.github.io/demo/api/pictures/";


const $one = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const cardContainer = $one(".row");
const clsbutton = $one(".btn-close");
const overlay = $one(".overlay");


axios.get(url).then(response => {

    createCards(response);

    createClickEvent(response);




});

clsbutton.addEventListener("click", closeOverlay)



// FUNZIONI
/**
 * Dato un oggetto, ritorna una stringa che codifica una card
 * con immagine, data e titolo
 *
 * @param {object} response 
 * @returns {string} HMTL string
 */
function createCards(response) {

    response.data.forEach(element => {

        const { id, title, date, url } = element

        cardContainer.innerHTML += `<div class="card" data-id = "${id}">
                <span class="pin"><img src="./img/pin.svg" alt=""></span>
                <img class="picture"
                    src=${url}
                    alt="">
                <p class="data">${date}</p>
                <h2 class="nome">${title}</h2>
            </div>`;
    })


}



/**
 * Scorro la risposta di axios e per ogni elemento creo un eventListener
 *al click, modifico src dell'immagine dell'overlay e mostro overlay
 
 * @param {array of object} posts 
 */
function createClickEvent(posts) {

    const cards = $all(".card")

    cards.forEach((card) => {

        card.addEventListener("click", function () {

            const id = parseInt(card.dataset.id);
            const post = posts.data.find((curPost) => curPost.id === id);
            const overlayImg = $one(".overlay img");
            overlayImg.src = post.url;
            overlay.classList.remove("d-none");
        })
    })
}






/** Al click del bottone nascondo  l'overlay */
function closeOverlay() {

    overlay.classList.add("d-none")
}


