const arrFood = [{
        id: 1,
        img: "/img/food.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        Timer: "/img/Timer.png",
        Fork: "/img/ForkKnife.png",
        Food: "Snack",
        Path: "./index1.html",
        Price: 30,
        category: 1,
        quantity: 0
    },
    {
        id: 2,
        img: "/img/food1.png",
        name: "Fresh Lime Roasted Salmon",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        Timer: "/img/Timer.png",
        Fork: "/img/ForkKnife.png",
        Food: "Fish",
        Path: "./index1.html",
        Price: 10,
        category: 1,
        quantity: 0
    },
    {
        id: 3,
        img: "/img/food2.png",
        name: "The Best Easy One Pot Chicken and Rice",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        Timer: "/img/Timer.png",
        Fork: "/img/ForkKnife.png",
        Food: "Snack",
        Path: "./index1.html",
        Price: 20,
        category: 3,
        quantity: 0
    },
    {
        id: 4,
        img: "/img/food3.png",
        name: "Fresh and Healthy Mixed Mayonnaise ",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        Timer: "/img/Timer.png",
        Fork: "/img/ForkKnife.png",
        Food: "Healthy",
        Path: "./index1.html",
        Price: 50,
        category: 4,
        quantity: 0
    },
    {
        id: 5,
        img: "/img/food4.png",
        name: "The Creamiest Creamy Chicken",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        Timer: "/img/Timer.png",
        Fork: "/img/ForkKnife.png",
        Food: "Noodles",
        Path: "./index1.html",
        Price: 60,
        category: 5,
        quantity: 0
    },
    {
        id: 6,
        img: "/img/food5.png",
        name: "Fruity Pancake with Orange & Blueberry",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        Timer: "/img/Timer.png",
        Fork: "/img/ForkKnife.png",
        Food: "Sweet",
        Path: "./index1.html",
        Price: 15,
        category: 6,
        quantity: 0
    },
]

let header = document.querySelector("header");

window.onscroll = () => {
    if (window.scrollY > 150) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

function ItemPage1(data) {
    var containtItem = document.querySelector(".containt--item");
    if (containtItem) {
        var item = data.map(e => {
            return `
                <div class="item">
                    <div class="img--item">
                        <a href=${e.Path}?id=${e.id}>
                            <img src=${e.img} alt="">
                        </a>
                    </div>
                    <h4><a href=${e.Path}>${e.name}</a></h4>
                    <div class="status">
                        <div class="timer">
                            <img src=${e.Timer} alt="">
                            <p>30 Minutes</p>
                        </div>
                        <div class="spice">
                            <img src=${e.Fork} alt="">
                            <p>${e.Food}</p>
                        </div>
                    </div>
                </div>
            `
        });
        containtItem.innerHTML = item.join("");
        moveItem();
    }
}


ItemPage1(arrFood);

function changeProduct() {
    let select = document.querySelector(".container select");
    let over30 = arrFood.filter((item) => item.Price > 30);
    let under30 = arrFood.filter((item) => item.Price <= 30);
    if (select) {
        select.addEventListener("change", () => {
            if (select.value == "over30") {
                ItemPage1(over30);
            } else if (select.value == "under30") {
                ItemPage1(under30);
            } else {
                ItemPage1(arrFood);
            }
        })
    }
}
changeProduct();

function moveItem() {
    const banner = document.querySelector(".diffentBanner");
    const id = new URLSearchParams(window.location.search).get("id");
    if (id && banner) {
        banner.innerHTML = "";
        const item = arrFood.find((x) => x.id == id);
        banner.innerHTML += `
            <div class="text--form">
                <h2>
                    ${item.name}<br>
                    <span>$${item.Price}</span>
                </h2>
                <p>${item.desc}</p>
                <form action="">
                    <input type="text" name="" class="inputPage2" placeholder="Quantity..." required>
                    <input type="button" class="btnPage2" value="Add To Cart">
                </form>
            </div>
            <div class="banner--img">
                <img src= ${item.img} alt="">
            </div>`
    }
}

function ItemPage2() {
    var containtItemPage2 = document.querySelector(".containt--df");
    if (containtItemPage2) {
        var itemPage2 = "";
        for (i = 3; i < arrFood.length; i++) {
            itemPage2 += `
            <div class="item">
                <div class="img--item">
                    <a href=${arrFood[i].Path}?id=${arrFood[i].id}>
                    <img src= ${arrFood[i].img} alt="">
                    </a>
                </div>
                <h4 class="color--text"><a href="">${arrFood[i].name}</a></h4>
                <span>$${arrFood[i].Price}</span>
                <div class="Add">
                    <button type="button" class="AddToCart">Add To Cart</button>
                </div>
            </div>
            `
        }
        containtItemPage2.innerHTML = itemPage2;
    }
}

ItemPage2();

// function ItemPage3() {
//     var containtItemPage3 = document.querySelector(".containt--df1");
//     if (containtItemPage3) {
//         var itemPage3 = arrFood.map(e => {
//             return `
//             <div class="item">
//                 <div class="img--item">
//                     <a href=${e.Path}?id=${e.id}>
//                     <img src= ${e.img} alt="">
//                     </a>
//                 </div>
//                 <h4 class="color--text"><a href=${e.Path}?id=${e.id}>${e.name}</a></h4>
//                 <span>$${e.Price}</span>
//                 <div class="Add">
//                     <button type="button" class="AddToCart">Add To Cart</button>
//                 </div>
//             </div>
//             `
//         })
//         containtItemPage3.innerHTML = itemPage3.join("");
//     }
// }

// ItemPage3();