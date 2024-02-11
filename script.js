let pic = document.getElementById('catpic');
let btnYes = document.getElementById('btn-yes');
let btnNo = document.getElementById('btn-no');
let text = document.getElementById('text-1');
let count = 0;

btnYes.addEventListener('click', () => {
    text.innerHTML = "YAYYYYYYY!!! I LOVE YOU SM<3";
    pic.src = "/img/happyCat.jpg"
    pic.style.animation = "rotate 1s ease"
    btnYes.style.width = "100px"
    btnYes.style.height = "50px"
    btnYes.style.fontSize = "20px"
    btnYes.innerHTML = "Yes"
    count = 0;
})
btnNo.addEventListener('click', () => {
    count+=1;
    if (count == 1){
        text.innerHTML = "Are you sure?"
        pic.src = "/img/sadCat1.jpg"
        btnYes.style.width = "150px"
        btnYes.style.height = "70px"
        pic.style.animation = "none"
        btnYes.style.fontSize = "30px"
    }
    if (count == 2){
        text.innerHTML = "Pookie please"
        pic.src = "/img/sadCat2.jpg"
        btnYes.style.width = "200px"
        btnYes.style.height = "90px"
        btnYes.style.fontSize = "40px"
    }
    if (count == 3){
        text.innerHTML = "Don't do this to me :("
        pic.src = "/img/sadCat3.jpg"
        btnYes.style.width = "230px"
        btnYes.style.height = "110px"
        btnYes.style.fontSize = "50px"
    }
    if (count == 4){
        text.innerHTML = "You're breaking my heart"
        pic.src = "/img/sadCat4.jpg"
        btnYes.innerHTML = "Yes!"
        btnYes.style.width = "260px"
        btnYes.style.height = "130px"
        btnYes.style.fontSize = "60px"
    }
    if (count == 5){
        text.innerHTML = "I'm gonna cry"
        pic.src = "/img/sadCat5.jpg"
        btnYes.innerHTML = "Yes!!"
        btnYes.style.width = "290px"
        btnYes.style.height = "150px"
        btnYes.style.fontSize = "70px"
    }
    if (count == 6){
        text.innerHTML = "Please, I will be very sad :("
        pic.src = "/img/sadCat6.jpg"
        btnYes.innerHTML = "Yes!!!"
        btnYes.style.width = "320px"
        btnYes.style.height = "170px"
        btnYes.style.fontSize = "80px"
    }
})