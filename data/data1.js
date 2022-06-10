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
        name: "Breakfast",
        image: "/img/categories.png"
    },
    {
        id: 2,
        name: "Vegan",
        image: "/img/categories1.png"
    },
    {
        id: 3,
        name: "Meat",
        image: "/img/categories2.png"
    },
    {
        id: 4,
        name: "Dessert",
        image: "/img/categories3.png"
    },
    {
        id: 5,
        name: "Lunch",
        image: "/img/categories4.png"
    },
    {
        id: 6,
        name: "Chocolate",
        image: "/img/categories5.png"
    }
]

const item = document.querySelectorAll(".item");
const CategoriesAll = document.querySelector(".CategoriesAll");
const menuList = document.querySelector(".menu");

if (CategoriesAll) {
    ListCategory.forEach((itm) => {
        CategoriesAll.innerHTML += `
        <div class="Categories--img">
            <a href="#"><img src=${itm.image} alt=""></a>
            <h4><a href="#">${itm.name}</a></h4>
        </div>
        `
    })
}

if (menuList) {
    ListCategory.forEach((item) => {
        menuList.innerHTML += `
        <ul>
            <li><a href="./Product.html?id=${item.id}">${item.name}</a></li>
        </ul>
        `
    })
}

function ItemPage3(data) {
    var containtItemPage3 = document.querySelector(".containt--df1");
    if (containtItemPage3) {
        containtItemPage3.innerHTML = '';
        var itemPage3 = data.map(e => {
            return `
            <div class="item">
                <div class="img--item">
                    <a href=${e.Path}?id=${e.id}>
                    <img src= ${e.image} alt="">
                    </a>
                </div>
                <h4 class="color--text"><a href=${e.Path}?id=${e.id}>${e.name}</a></h4>
                <span>$${e.Price}</span>
                <div class="Add">
                    <button type="button" class="AddToCart">Add To Cart</button>
                </div>
            </div>
            `
        })
        containtItemPage3.innerHTML = itemPage3.join("");
        AddItem();
    }
}

function ListProducts() {
    let id = new URLSearchParams(window.location.search).get("id");
    let listItem = ListProduct.filter((item) => item.category == id);
    if (id) {
        ItemPage3(listItem);
    } else {
        ItemPage3(ListProduct);
    }
}

function AddItem() {
    const addbtn = document.querySelectorAll(".AddToCart");
    addbtn.forEach((e) => {
        e.addEventListener("click", () => {
            let name = e.parentElement.parentElement.children[1].textContent;
            let prd = ListProduct.filter((item) => item.name == name);
            Empty();
            Uppoint();
            AddProduct(prd[0].id - 1);
            UpdateProduct();
        });
    })
}

function Empty() {
    let numbercart = localStorage.getItem("Numbercart");
    let empty = document.querySelector(".ContainProduct h3");
    if (empty) {
        if (parseInt(numbercart)) {
            empty.style.cssText = "display: none";
        } else {
            empty.style.cssText = "display: block";
        }
    }
}

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
    return numbercart;
}

function SavePoint() {
    let cart = document.querySelector(".cart a span");
    let numbercart = localStorage.getItem("Numbercart");
    cart.textContent = numbercart;
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
                <td class="quantity">
                    <span>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </span>
                    <span>${value.quantity}</span>
                    <span>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </span>
                </td>
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
    }
    UpdateProduct();
    SavePoint();
    Empty();
}

function addBanner() {
    let btnPage2 = document.querySelector(".btnPage2");
    let cartItem = LocalCart.getLocalCart();
    if (btnPage2) {
        btnPage2.addEventListener("click", (x) => {
            let id = new URLSearchParams(window.location.search).get("id");
            id = parseInt(id) - 1;
            let inputPage2 = document.querySelector(".inputPage2");
            if (isNaN(inputPage2.value) || inputPage2.value == '' || inputPage2.value == '0') {
                alert("Số lượng không hợp lệ!!!");
                return 0;
            } else {
                if (cartItem.has(`${id}`)) {
                    let product = cartItem.get(`${id}`);
                    product.quantity += parseInt(inputPage2.value);
                    cartItem.set(`${id}`, product);
                } else {
                    ListProduct[id].quantity = parseInt(inputPage2.value);
                    cartItem.set(`${id}`, ListProduct[id]);
                }
            }
            localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cartItem)));
            localStorage.setItem("Numbercart", Uppoint() + parseInt(inputPage2.value) - 1);
            SavePoint();
        });
    }
}

SavePoint();
UpdateProduct();
addBanner();
Empty();
ListProducts();