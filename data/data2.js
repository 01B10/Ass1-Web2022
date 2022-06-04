let addbtn = document.querySelectorAll(".AddToCart");
addbtn.forEach((e, id) => {
    e.addEventListener("click", () => {
        console.log(e);
        Uppoint();
        // AddProduct()
    });
})

function Uppoint() {
    let cart = document.querySelector(".cart a span");
    let numbercart = localStorage.getItem("Numbercart");
    numbercart = parseInt(numbercart);
    if (numbercart) {
        numbercart += 1;
        cart.textContent = numbercart;
    } else {
        numbercart = 1;
        cart.textContent = 1;
    }
    localStorage.setItem("Numbercart", numbercart);
}

function SavePoint() {
    let cart = document.querySelector(".cart a span");
    let numbercart = localStorage.getItem("Numbercart");
    cart.textContent = numbercart;
}

SavePoint();

// function AddProduct(){

// }