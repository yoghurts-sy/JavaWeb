window.onload = function () {
    let load = document.getElementById("loading");
    load.style.display = "inline";
    let bg = document.getElementById("background-id");
    bg.style.display = "inline";
    document.getElementById("load-btn").onclick = function () {
        load.style.display = "none";
        bg.style.display = "none";
        let tip = document.getElementById("tip-2");
        tip.style.display = "inline";
    }
}

function showAdd() {
    let bg = document.getElementById("background-id")
    bg.style.display = "inline";
    let add = document.getElementById("popup-add");
    add.style.display = "inline";
}
function cookAdd() {

}
function addCancel() {
    let bg = document.getElementById("background-id")
    bg.style.display = "none";
    let add = document.getElementById("popup-add");
    add.style.display = "none";
}



let waitingLi2 = document.getElementById("waiting-li-2");
waitingLi2.onclick = function () {
    let waiting = document.getElementById("waiting-face-2");
    let client = document.getElementById("client-face-1");
    let info = document.getElementById("waiting-info-2");
    client.innerHTML += waiting.innerHTML;
    client.style.backgroundImage = "linear-gradient(90deg,#FF2626 50%,#B20000 50%)";
    waiting.style.display = "none";
    info.style.display = "none";


    let bg = document.getElementById("background-id")
    bg.style.display = "inline";


    let menu = document.getElementById("popup-menu");
    menu.style.display = "inline";
    let menuFace = document.getElementById("menu-face");
    menuFace.innerHTML += waiting.innerHTML;

    let tip = document.getElementById("tip-2");
    tip.style.display = "none";

}
let numCook = 1;
let numClient = 1;
function subs() {
    let coldDish = null;
    let mainDish = null;
    let drinkDish = null;
    coldDish = menuResult.coldDish.value;
    mainDish = menuResult.mainDish.value;
    drinkDish  = menuResult.drinkDish.value;


    let bg = document.getElementById("background-id")
    bg.style.display = "none";
    let menu = document.getElementById("popup-menu");
    menu.style.display = "none";

    let dishContainer = document.getElementById("dish-container-1");

    if (mainDish != "") {
        dishContainer.innerHTML += ("<div class='order-dish' id='client1-dish-1'>"
            + mainDish +
            " </div> ");
    }
    if (coldDish != "") {
        dishContainer.innerHTML += ("<div class='order-dish' id='client1-dish-2'>"
            + coldDish +
            " </div> ");
    }
    if (drinkDish != "") {
        dishContainer.innerHTML += ("<div class='order-dish' id='client1-dish-3'>"
            + drinkDish +
            " </div> ");
    }

    let dish1 = document.getElementById("client1-dish-1");
    myTime(dish1);

    let cookDish = document.getElementById("cook-container-1");
    cookDish.innerText = mainDish;
    cookDish.style.display = "inline";
    myCookTime(cookDish);


}

/*做菜时间 50s*//*吃的时候还可以再用*/

function myTime(obj) {
    function bgChange() {
        if (numClient <= 20) {
            let numOver = numClient * 5;
            let numbg = 100 - numOver;
            numOver += "";
            numbg += "";
            obj.style.backgroundImage = "linear-gradient(90deg,#B20000 " + numOver +"%,#FF2020 " + numbg + "%)";
        }
        numClient++;
        if (numClient > 20) {
            clearInterval(interval);
        }
    }
    let interval = setInterval(bgChange,1000);
}

/*厨师做菜*/
function myCookTime(obj) {
    function bgChange() {
        let tip1 = document.getElementById("tip-1");
        tip1.style.display = "inline";
        if (numCook <= 50) {
            let numOver = numCook * 2;
            let numbg = 100 - numOver;
            numOver += "";
            numbg += "";
            obj.style.backgroundImage = "linear-gradient(90deg,#B20000 " + numOver +"%,#FF2020 " + numbg + "%)";
        }
        numCook++;
        if (numCook > 50) {
            let cookServe = document.getElementById("cook-serve");
            cookServe.style.display = "inline";
        }

        document.getElementById("cook-head-img-1").onclick = function () {
            numCook += 2;
        }
        if (numCook >= 50) {
            obj.style.backgroundImage = "linear-gradient(90deg,#B20000 100%,#FF2020 0%)";
            tip1.style.display = "none";


            let dishPlate = document.getElementById("dish-plate");
            dishPlate.style.display = "inline";
            let dishPlateImg = document.getElementById("dish-plate-img");
            dishPlateImg.style.display = "inline";

            let tip3 = document.getElementById("tip-3");
            tip3.style.display = "inline";
            let dish = document.getElementById("client1-dish-1");
            myEatTime(dish);

            clearInterval(interval);
        }
    }
    let interval =  setInterval(bgChange,1000);
}

function myEatTime(obj) {
    let eatNum = 1;
    function eat() { /*20秒吃饭*/
        if (eatNum <= 20) {
            let numOver = eatNum * 5;
            let numbg = 100 - numOver;
            numOver += "";
            numbg += "";
            obj.style.backgroundImage = "linear-gradient(90deg,#B20000 " + numOver +"%,#FF2020 " + numbg + "%)";
        }
        eatNum++;

        if (eatNum > 20) {
            let cookServe = document.getElementById("cook-serve");
            cookServe.style.display = "none";
            let dishPlate = document.getElementById("dish-plate");
            dishPlate.style.display = "none";
            let dishPlateImg = document.getElementById("dish-plate-img");
            dishPlateImg.style.display = "none";
            let tip3 = document.getElementById("tip-3");
            tip3.style.display = "none";
            let dish = document.getElementById("client1-dish-1");


            clearInterval(interval);
            obj.style.backgroundImage = "linear-gradient(90deg,#B20000 100%,#FF2020 0%)";
            /*吃完饭后*/
            let money = document.getElementById("money");
            money.style.display = "inline";
            let tip4 = document.getElementById("tip-4");
            tip4.style.display = "inline";

            money.onclick = function () {
                tip4.style.display = "none";
                let dishSum = document.getElementById("dish-sum");
                let allSum = parseInt(dishSum.innerText);

                let right = document.getElementById("info-right");
                allSum += parseInt(right.innerText);

                right.innerText = allSum + "";

                money.style.display = "none";
                let like = document.getElementById("like");
                like.style.display = "inline";

                document.getElementById("tip-5").style.display = "inline";
                document.getElementById("like2").style.display = "inline";
            }


        }
    }
    let interval = setInterval(eat,1000);
}


let sum = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

$("input[name=coldDish]").click(function(){

    let coldDishName = $(this).val();
    let coldDishNum = 0;
    switch (coldDishName) {
        case "凉拌SAN": coldDishNum = 6;break
        case "冷切DOM": coldDishNum = 4;break
    }
    let dishSum = document.getElementById("dish-sum");
    sum = parseInt(dishSum.innerText);
    if (sum1 === 0) {
        sum1 = coldDishNum;
        sum += sum1;
    } else if (sum1 === 6) {
        sum -= 6;
        sum1 = coldDishNum;
        sum += sum1;
    } else if (sum1 === 4) {
        sum -= 4;
        sum1 = coldDishNum;
        sum += sum1;
    }
    dishSum.innerText = sum+"";
});

$("input[name=mainDish]").click(function(){

    let mainDishName = $(this).val();
    let mainDishNum = 0;
    switch (mainDishName) {
        case "UL炖LI": mainDishNum = 12;break
        case "红烧HEAD": mainDishNum = 15;break
        case "酥炸ECharts": mainDishNum = 18;break
        case "炙烤CSS": mainDishNum = 16;break
        case "清蒸DIV": mainDishNum = 12;break
    }
    let dishSum = document.getElementById("dish-sum");
    sum = parseInt(dishSum.innerText);

    if (sum2 === 0) {
        sum2 = mainDishNum;
        sum += sum2;
    } else if (sum2 === 12) {
        sum -= 12;
        sum2 = mainDishNum;
        sum += sum2;
    } else if (sum2 === 15) {
        sum -= 15;
        sum2 = mainDishNum;
        sum += sum2;
    } else if (sum2 === 18) {
        sum -= 18;
        sum2 = mainDishNum;
        sum += sum2;
    } else if (sum2 === 16) {
        sum -= 16;
        sum2 = mainDishNum;
        sum += sum2;
    }

    dishSum.innerText = sum+"";
});
$("input[name=drinkDish]").click(function(){

    let drinkDishName = $(this).val();
    let drinkDishNum = 0;
    switch (drinkDishName) {
        case "鲜榨flex": drinkDishNum = 5;break
        case "小程序奶茶": drinkDishNum = 6;break
    }
    let dishSum = document.getElementById("dish-sum");
    sum = parseInt(dishSum.innerText);

    if (sum3 === 0) {
        sum3 = drinkDishNum;
        sum += sum3;
    } else if (sum3 === 5) {
        sum -= 5;
        sum3 = drinkDishNum;
        sum += sum3;
    } else if (sum3 === 6) {
        sum -= 6;
        sum3 = drinkDishNum;
        sum += sum3;
    }

    dishSum.innerText = sum+"";
});

function Reset() {
    document.getElementById("menu-result").reset();
    sum = 0;
    sum1 = 0;
    sum2 = 0;
    sum3 = 0;
    document.getElementById("dish-sum").innerText = "0";
}
function notEat() {
    let bg = document.getElementById("background-id")
    bg.style.display = "none";
    let menu = document.getElementById("popup-menu");
    menu.style.display = "none";
    let client = document.getElementById("client-face-1");
    client.innerHTML = "";
    client.style.backgroundImage = "linear-gradient(90deg,#DDDDDD 50%,#AAAAAA 50%)";
    Reset();
}

