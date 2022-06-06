const ListProduct = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "/img/food.png",
        category: 1,
        quantity: 0
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "/img/food1.png",
        category: 1,
        quantity: 0
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "/img/food2.png",
        category: 3,
        quantity: 0
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "/img/food3.png",
        category: 4,
        quantity: 0
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "/img/food4.png",
        category: 5,
        quantity: 0
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "/img/food5.png",
        category: 6,
        quantity: 0
    }
]
const ListCategory = [{
        id: 1,
        name: "breakfast",
        image: "/img/categories.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "/img/categories.png1"
    },
    {
        id: 3,
        name: "meat",
        image: "/img/categories.png2"
    },
    {
        id: 4,
        name: "dessert",
        image: "/img/categories.png3"
    },
    {
        id: 5,
        name: "lunch",
        image: "/img/categories.png4"
    },
    {
        id: 6,
        name: "chocolate",
        image: "/img/categories.png5"
    }
]

const item = document.querySelectorAll(".item");
let addbtn = document.querySelectorAll(".AddToCart");
item.forEach((e) => {
    e.addEventListener("click", (x) => {
        let name = e.children[1].children[0].textContent;
        let prd = ListProduct.filter((item) => item.name == name);
        LinkPage(prd[0]);
    });
})

addbtn.forEach((e, id) => {
    e.addEventListener("click", () => {
        Uppoint();
        AddProduct(id);
        UpdateProduct();
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

function LinkPage(product) {
    let page = localStorage.getItem("Page");
    page = JSON.parse(page);
    if (page) {
        page = {
            [product.id]: product,
        }
    } else {
        page = {
            [product.id]: product,
        }
    }
    localStorage.setItem("Page", JSON.stringify(page));
    ChangeBanner();
}

function ChangeBanner() {
    const banner = document.querySelector(".diffentBanner");
    try {
        banner.innerHTML = "";
        Object.values(JSON.parse(localStorage.getItem("Page"))).forEach((item) => {
            banner.innerHTML = `
            <div class="text--form">
                <h2>
                    ${item.name}<br>
                    <span>$${item.price}</span>
                </h2>
                <p>${item.desc}</p>
                <form action="">
                    <input type="text" name="" class="inputPage2" placeholder="Quantity" required>
                    <input type="submit" class="btnPage2" value="Add To Cart">
                </form>
            </div>
            <div class="banner--img">
                <img src= ${item.image} alt="">
            </div>
            `
        })
    } catch (error) {

    }
}

class LocalCart {
    static key = "arrItem";
    static getLocalCart() {
        const cart = localStorage.getItem(LocalCart.key);
        let cartMap = new Map();
        if (cart === null || cart.length == 0) return cartMap
        return new Map(Object.entries(JSON.parse(cart)));
    }
}

function AddProduct(id) {
    let cartMap = LocalCart.getLocalCart();
    if (cartMap.has(`${id}`)) {
        let itemmap = cartMap.get(`${id}`);
        itemmap.quantity += 1;
        cartMap.set(`${id}`, itemmap);
    } else {
        ListProduct[id].quantity = 1;
        cartMap.set(`${id}`, ListProduct[id])
    }
    localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cartMap)));
}



function UpdateProduct() {
    let tbody = document.querySelector("table tbody");
    let cartMap = LocalCart.getLocalCart();
    if (tbody) {
        tbody.innerHTML = "";
        for (const [key, value] of cartMap.entries()) {
            const cartItem = document.createElement('tr');
            cartItem.classList.add("cart-item");
            cartItem.innerHTML =
                `<td>
                <ion-icon name="close-outline" class="remove"></ion-icon>
            </td>
            <td>
                <img src=${value.image} alt="">
            </td>
            <td>${value.name}</td>
            <td>${value.category}</td>
            <td>${value.quantity}</td>
            <td>${value.price * value.quantity}</td>
            `;
            cartItem.firstElementChild.children[0].addEventListener("click", () => {
                RemoveItem(key);
            });
            tbody.append(cartItem);
        }
    }
}

function RemoveItem(key) {
    let cartItem = LocalCart.getLocalCart();
    if (cartItem.has(`${key}`)) {
        let Numbercart = localStorage.getItem("Numbercart");
        let numberItem = cartItem.get(`${key}`).quantity;
        localStorage.setItem("Numbercart", (parseInt(Numbercart) - numberItem));
        cartItem.delete(`${key}`);
        localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cartItem)));
        console.log(Numbercart);
    }
    UpdateProduct();
    SavePoint();
}

ChangeBanner()
SavePoint();
UpdateProduct();