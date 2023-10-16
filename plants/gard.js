function blurImg(v) {
    let card1 = document.getElementById("card-1")
    let card2 = document.getElementById("card-2")
    let card3 = document.getElementById("card-3")
    let card4 = document.getElementById("card-4")
    let card5 = document.getElementById("card-5")
    let card6 = document.getElementById("card-6")

    let btn1 = document.getElementById("btn-1")
    let btn2 = document.getElementById("btn-2")
    let btn3 = document.getElementById("btn-3")
    if (v == "btn-1"){
        btn1.classList.remove('fill_button')
        btn2.classList.remove('fill_button')
        btn3.classList.remove('fill_button')
        card1.classList.remove('blurs')
        card2.classList.remove('blurs')
        card3.classList.remove('blurs')
        card4.classList.remove('blurs')
        card5.classList.remove('blurs')
        card6.classList.remove('blurs')

        card2.classList.toggle('blurs')
        card3.classList.toggle('blurs')
        card4.classList.toggle('blurs')
        card6.classList.toggle('blurs')

        btn1.classList.toggle('fill_button')
    }
    if (v == "btn-2"){
        btn1.classList.remove('fill_button')
        btn2.classList.remove('fill_button')
        btn3.classList.remove('fill_button')
        card1.classList.remove('blurs')
        card2.classList.remove('blurs')
        card3.classList.remove('blurs')
        card4.classList.remove('blurs')
        card5.classList.remove('blurs')
        card6.classList.remove('blurs')

        card1.classList.toggle('blurs')
        card6.classList.toggle('blurs')
        card2.classList.toggle('blurs')
        card4.classList.toggle('blurs')
        card5.classList.toggle('blurs')

        btn2.classList.toggle('fill_button')
    }
    if (v == "btn-3"){
        btn1.classList.remove('fill_button')
        btn2.classList.remove('fill_button')
        btn3.classList.remove('fill_button')
        card1.classList.remove('blurs')
        card2.classList.remove('blurs')
        card3.classList.remove('blurs')
        card4.classList.remove('blurs')
        card5.classList.remove('blurs')
        card6.classList.remove('blurs')

        card1.classList.toggle('blurs')
        card3.classList.toggle('blurs')
        card5.classList.toggle('blurs')

        btn3.classList.toggle('fill_button')
    }
}

