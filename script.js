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
        let allPics = element.src.original;
        let createCards = document.createElement("div");
        createCards.classList.add("col-md-4");
        let myImg = document.createElement("img");
        myImg.style.maxHeight = "300px";
        myImg.style.maxWidth = "300px";
        myImg.style.objectFit = "cover";
        myImg.src = allPics;
        container.appendChild(createCards);
        createCards.appendChild(myImg);
        console.log(index)
    });
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