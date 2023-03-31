startUp()


function removecookie(element){
    element = document.querySelector("#cookie")
    element.remove()
}

function clickCart(){
    alert("Your Cart is empty")
}

var animalImg = document.querySelector("#fav-pic")

function newPicture1(){
    animalImg.src = "./images/succulents-1.jpg"
}

function newPicture2(){
    animalImg.src = "./images/succulents-2.jpg"
}


function startUp(){
    console.log("StartUp is Running...");
}