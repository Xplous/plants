let line = document.createElement("hr");
line.style.display = "block";
line.style.width = "164px";
line.style.height = "0px";
line.style.background = "#AEA1A1";
line.style.border = "0.5px solid #AEA1A1;";
line.style.marginBottom = "0px";
line.style.marginTop = "12px";
let text = document.createElement("text");
text.style.fontFamily = "Inter";
text.style.fontStyle = "normal";
text.style.fontWeight = "300";
text.style.height = "30px";
text.style.width = "169px";
text.style.fontSize = '10px';
text.style.lineHeight = "10px";
text.style.color = "#717171";
text.style.padding = "6px 41px 6px 40px";
text.style.marginTop = "0px";
let priceTag = document.createElement("price-tag");
priceTag.style.fontFamily = "Inter";
priceTag.style.fontStyle = "normal";
priceTag.style.fontWeight = "400";
priceTag.style.fontSize = '12px';
priceTag.style.lineHeight = "20px";
priceTag.style.color = "#000000";
priceTag.style.padding = "0px 87px 0px 40px";
priceTag.style.marginTop = "0px";
priceTag.style.width = "123px"
priceTag.style.height = "17px"
let button = document.createElement('div');
button.style.width = "86px";
button.style.height = "25px";
button.style.background = "#FFFFFF";
button.style.borderRadius = "10px";
button.style.margin = "12px 125px 12px 39px";
button.style.display = "flex";

let line2 = document.createElement("hr2");
line2.style.display = "block";
line2.style.width = "164px";
line2.style.height = "0px";
line2.style.background = "#AEA1A1";
line2.style.border = "0.5px solid #AEA1A1;";
line2.style.marginBottom = "0px";
line2.style.marginTop = "12px";
let text2 = document.createElement("text2");
text2.style.fontFamily = "Inter";
text2.style.fontStyle = "normal";
text2.style.fontWeight = "300";
text2.style.height = "30px";
text2.style.width = "169px";
text2.style.fontSize = '10px';
text2.style.lineHeight = "10px";
text2.style.color = "#717171";
text2.style.padding = "6px 41px 6px 40px";
text2.style.marginTop = "0px";
let priceTag2 = document.createElement("price-tag2");
priceTag2.style.fontFamily = "Inter";
priceTag2.style.fontStyle = "normal";
priceTag2.style.fontWeight = "400";
priceTag2.style.fontSize = '12px';
priceTag2.style.lineHeight = "20px";
priceTag2.style.color = "#000000";
priceTag2.style.padding = "0px 87px 0px 40px";
priceTag2.style.marginTop = "0px";
priceTag2.style.width = "123px"
priceTag2.style.height = "17px"
let button2 = document.createElement('div2');
button2.style.width = "86px";
button2.style.height = "25px";
button2.style.background = "#FFFFFF";
button2.style.borderRadius = "10px";
button2.style.margin = "12px 125px 12px 39px";
button2.style.display = "flex";

let line3 = document.createElement("hr3");
line3.style.display = "block";
line3.style.width = "164px";
line3.style.height = "0px";
line3.style.background = "#AEA1A1";
line3.style.border = "0.5px solid #AEA1A1;";
line3.style.marginBottom = "0px";
line3.style.marginTop = "12px";
let text3 = document.createElement("text3");
text3.style.fontFamily = "Inter";
text3.style.fontStyle = "normal";
text3.style.fontWeight = "300";
text3.style.height = "30px";
text3.style.width = "169px";
text3.style.fontSize = '10px';
text3.style.lineHeight = "10px";
text3.style.color = "#717171";
text3.style.padding = "6px 41px 6px 40px";
text3.style.marginTop = "0px";
let priceTag3 = document.createElement("price-tag3");
priceTag3.style.fontFamily = "Inter";
priceTag3.style.fontStyle = "normal";
priceTag3.style.fontWeight = "400";
priceTag3.style.fontSize = '12px';
priceTag3.style.lineHeight = "20px";
priceTag3.style.color = "#000000";
priceTag3.style.padding = "0px 87px 0px 40px";
priceTag3.style.marginTop = "0px";
priceTag3.style.width = "123px"
priceTag3.style.height = "17px"
let button3 = document.createElement('div3');
button3.style.width = "86px";
button3.style.height = "25px";
button3.style.background = "#FFFFFF";
button3.style.borderRadius = "10px";
button3.style.margin = "12px 125px 12px 39px";
button3.style.display = "flex";
function price(value) {
    let flag = true
    let i1 = 0
    let i2 = 0
    let i3 = 0
    if (value == "item-1") {
        let v = document.getElementById("item-1");
        let b = document.getElementById("btn-img1")
        if(v.classList.contains("item1")) {
            v.classList.remove("item1");
            b.src = "./images/accordion_btn.svg"
            line.remove()
            text.remove()
            priceTag.remove()
            button.remove()
        }
        else {
            v.classList.add("item1");
            b.src = "./images/fill_accordion_btn.svg"
            document.getElementById("item-1").appendChild(line)
            document.getElementById('item-1').appendChild(text)
            text.innerHTML = "Release of Letraset sheets containing Lorem Ipsum passages, and more recently"
            document.getElementById("item-1").appendChild(priceTag)
            priceTag.innerHTML = `<span class="pricetags">$15</span> / per hour`
            document.getElementById("item-1").appendChild(button)
            button.innerHTML = `<h4 class="order">Order</h4>`
        }
    }
    if (value == "item-2") {
        console.log('item2')
        let v = document.getElementById("item-2");
        let b = document.getElementById("btn-img2")
        if(v.classList.contains("item2")) {
            v.classList.remove("item2");
            b.src = "./images/accordion_btn.svg"
            line2.remove()
            text2.remove()
            priceTag2.remove()
            button2.remove()
        }
        else {
            v.classList.add("item2");
            b.src = "./images/fill_accordion_btn.svg"
            document.getElementById("item-2").appendChild(line2)
            document.getElementById('item-2').appendChild(text2)
            text2.innerHTML = "Release of Letraset sheets containing Lorem Ipsum passages, and more recently"
            document.getElementById("item-2").appendChild(priceTag2)
            priceTag2.innerHTML = `<span class="pricetags">$25</span> / per hour`
            document.getElementById("item-2").appendChild(button2)
            button2.innerHTML = `<h4 class="order">Order</h4>`
        }
    }
    if (value == "item-3") {
        let v = document.getElementById("item-3");
        let b = document.getElementById("btn-img3")
        if(v.classList.contains("item3")) {
            v.classList.remove("item3");
            b.src = "./images/accordion_btn.svg"
            line3.remove()
            text3.remove()
            priceTag3.remove()
            button3.remove()
            
        }
        else {
            v.classList.add("item3");
            b.src = "./images/fill_accordion_btn.svg"
            document.getElementById("item-3").appendChild(line3)
            document.getElementById('item-3').appendChild(text3)
            text3.innerHTML = "Release of Letraset sheets containing Lorem Ipsum passages, and more recently"
            document.getElementById("item-3").appendChild(priceTag3)
            priceTag3.innerHTML = `<span class="pricetags">$35</span> / per hour`
            document.getElementById("item-3").appendChild(button3)
            button3.innerHTML = `<h4 class="order">Order</h4>`
        }
    }
}
function select(value) {
    if (value == "s1"){
        document.getElementById("s-g").innerHTML = "Canandaigua, NY"
    }
    if (value == "s2"){
        document.getElementById("s-g").innerHTML = "New York City"
    }
    if (value == "s3"){
        document.getElementById("s-g").innerHTML = "Yonkers, NY"
    }
    if (value == "s4"){
        document.getElementById("s-g").innerHTML = "Sherrill, NY"
    }
}

const burger = document.querySelector('.burger')
let header = document.querySelector('.header')
let nav = document.getElementById('nav1')
function menu() {
    nav.classList.toggle('visual')
}

burger.addEventListener('click', menu)
nav.addEventListener('click', () => {
    if (nav.classList.contains('visual')) {
        nav.classList.toggle('visual')
    }
})