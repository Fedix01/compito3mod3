let container = document.querySelector(".row");


function loadData(string) {
    fetch(" https://api.pexels.com/v1/search?query=" + string, {
        method: "GET",
        headers: { Authorization: "C687ZlEx1zFGjCHpPv2bKks7n5aKhC9xqAy13SrELNsLeWqmBzadtoPO" }
    })
        .then((response) => response.json())
        .then((json) => createHtml(json))
        .catch((error) => console.log("error detected" + error))
}

function createHtml(json) {
    let pic = json.photos;
    console.log(pic);


    pic.forEach((element, index) => {
        let allPics = element.src.medium;
        let createCards = document.createElement("div");
        createCards.classList.add("col-md-4", "card", "container-fluid");
        createCards.style.height = "auto";
        let myImg = document.createElement("img");
        myImg.classList.add("img-fluid", "card-img-top");
        myImg.style.cursor = "pointer";
        myImg.style.height = "300px";
        myImg.style.width = "100%";
        myImg.style.objectFit = "cover";
        myImg.src = allPics;
        let cardsBody = document.createElement("div");
        cardsBody.classList.add("card-body");
        cardsBody.innerHTML = `Title: ${element.alt} <br> Photographer: ${element.
            photographer}`;
        container.appendChild(createCards);
        createCards.appendChild(myImg);
        createCards.appendChild(cardsBody);
        console.log(index)
    });
    myImg.addEventListener("click", (event) => {
        console.log(event.target)
    })
}



let dogsBtn = document.getElementById("dogs");
let catsBtn = document.getElementById("cats");

dogsBtn.addEventListener("click", () => {
    loadData("dogs");
    container.innerHTML = "";
})

catsBtn.addEventListener("click", () => {
    loadData("cats");
    container.innerHTML = "";
})