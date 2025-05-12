//Utilizzo axios per richiesta Ajax
const url = "https://lanciweb.github.io/demo/api/pictures/";


const $one = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const cardContainer = $one(".row");

axios.get(url).then(response => {
    response.data.forEach(element => {
        cardContainer.innerHTML += createCard(element)
    });
});



/**
 * Dato un oggetto, ritorna una stringa che codifica una card
 * con immagine, data e titolo
 *
 * @param {object} obj 
 * @returns {string} 
 */
function createCard(obj) {

    const { id, title, date, url } = obj

    return `<div class="card">
                <span class="pin"><img src="./img/pin.svg" alt=""></span>
                <img class="picture"
                    src=${url}
                    alt="">
                <p class="data">${date}</p>
                <h2 class="nome">${title}</h2>
            </div>`;

}