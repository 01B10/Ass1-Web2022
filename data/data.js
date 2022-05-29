const arrFood = [{
        img: "/Ass1/img/food.png",
        desciption: "Big and Juicy Wagyu Beef Cheeseburger",
        Timer: "/Ass1/img/Timer.png",
        Fork: "/Ass1/img/ForkKnife.png",
        Food: "Snack",
        Path: "./index1.html",
        Price: 30
    },
    {
        img: "/Ass1/img/food1.png",
        desciption: "Fresh Lime Roasted Salmon",
        Timer: "/Ass1/img/Timer.png",
        Fork: "/Ass1/img/ForkKnife.png",
        Food: "Fish",
        Path: "#",
        Price: 30
    },
    {
        img: "/Ass1/img/food2.png",
        desciption: "The Best Easy One Pot Chicken and Rice",
        Timer: "/Ass1/img/Timer.png",
        Fork: "/Ass1/img/ForkKnife.png",
        Food: "Snack",
        Path: "#",
        Price: 30
    },
    {
        img: "/Ass1/img/food3.png",
        desciption: "Fresh and Healthy Mixed Mayonnaise ",
        Timer: "/Ass1/img/Timer.png",
        Fork: "/Ass1/img/ForkKnife.png",
        Food: "Healthy",
        Path: "#",
        Price: 30
    },
    {
        img: "/Ass1/img/food4.png",
        desciption: "The Creamiest Creamy Chicken",
        Timer: "/Ass1/img/Timer.png",
        Fork: "/Ass1/img/ForkKnife.png",
        Food: "Noodles",
        Path: "#",
        Price: 30
    },
    {
        img: "/Ass1/img/food5.png",
        desciption: "Fruity Pancake with Orange & Blueberry",
        Timer: "/Ass1/img/Timer.png",
        Fork: "/Ass1/img/ForkKnife.png",
        Food: "Sweet",
        Path: "#",
        Price: 30
    },
]


function ItemPage1() {
    try {
        var containtItem = document.querySelector(".containt--item");
        var item = arrFood.map(e => {
            return `
                <div class="item">
                    <div class="img--item">
                        <a href=${e.Path}>
                            <img src=${e.img} alt="">
                        </a>
                    </div>
                    <h4><a href="">${e.desciption}</a></h4>
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
        containtItem.innerHTML = item.join("")
    } catch (error) {

    }
}

ItemPage1();


function ItemPage2() {
    try {
        var containtItemPage2 = document.querySelector(".containt--df");
        var itemPage2 = "";
        for (i = 3; i <= arrFood.length; i++) {
            try {
                itemPage2 += `
            <div class="item">
                <div class="img--item">
                    <a href="">
                    <img src= ${arrFood[i].img} alt="">
                    </a>
                </div>
                <h4 class="color--text"><a href="">${arrFood[i].desciption}</a></h4>
                <span>${arrFood[i].Price}</span>
                <div class="Add">
                    <button type="button">Add To Cart</button>
                </div>
            </div>
            `
            } catch (error) {

            }
        }
        containtItemPage2.innerHTML = itemPage2;
        console.log(itemPage2)
    } catch (error) {

    }
}

ItemPage2();

function ItemPage3() {
    try {
        var containtItemPage3 = document.querySelector(".containt--df1");
        var itemPage3 = arrFood.map(e => {
            return `
            <div class="item">
                <div class="img--item">
                    <a href=${e.Path}>
                    <img src= ${e.img} alt="">
                    </a>
                </div>
                <h4 class="color--text"><a href="">${e.desciption}</a></h4>
                <span>${e.Price}</span>
                <div class="Add">
                    <button type="button">Add To Cart</button>
                </div>
            </div>
            `
        })
        containtItemPage3.innerHTML = itemPage3.join("");
    } catch (error) {

    }
}

ItemPage3();