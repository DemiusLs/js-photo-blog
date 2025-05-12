//Utilizzo axios per richiesta Ajax
url = "https://lanciweb.github.io/demo/api/pictures/"

const cardContainer = document.querySelector(".row");



axios.get(url).then((response) => {

    console.log(response.data)
    let template = "";
    response.data.forEach(element => {
        const { id, title, date, url } = element

        console.log(id, title, date, url)
        template += `<div class="card">
                        <span class="pin"><img src="./img/pin.svg" alt=""></span>
                        <img class="picture"
                            src=${url}
                            alt="">
                        <p class="data">${date}</p>
                        <h2 class="nome">${title.toUpperCase()}</h2>
                    </div>` ;
    }


    )
    cardContainer.innerHTML = template;

})