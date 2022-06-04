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
item.forEach((e) => {
    e.addEventListener("click", (x) => {
        // x.preventDefault();
        let name = e.children[1].children[0].textContent;
        let prd = ListProduct.filter((item) => item.name == name);
        LinkPage(prd[0]);
        AddProduct(prd[0]);
    });
})

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

function AddProduct(product) {
    let arrItem = localStorage.getItem("arrItem");
    arrItem = JSON.parse(arrItem);
    if (arrItem) {
        arrItem = {
            ...arrItem,
            [product.id]: product
        }
        arrItem[product.id].quantity += 1;
    } else {
        product.quantity = 1;
        arrItem = {
            [product.id]: product
        }
    }
    localStorage.setItem("arrItem", JSON.stringify(arrItem));
}

ChangeBanner()