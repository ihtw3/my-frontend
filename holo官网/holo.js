
// let num = 1;
// let timer = null;
// let i = 0;
// swiper();


// function swiper() {
//     timer = setInterval(() => {
//         num++;
//         if (num > 6) {
//             $('.banner-box-see').css('left', -1280)
//             num = 2;
//         }
//         $('.banner-box-see').animate({ left: -num * 1280 }, 500);

//         i++;
//         if (i > 4) {
//             i = 0;
//         }
//         $('.bots li').eq(i).addClass('active');
//         $('.bots li').eq(i).siblings().removeClass('active');

//     }, 2000);
// }

// $('.banner-box').mouseover(() => {
//     clearInterval(timer);
// });

// $('.banner-box').mouseout(() => {
//     swiper();
// });


// let menu = document.getElementsByClassName('menu');
// let book = document.getElementsByClassName('book');
// menu.onmouseover = function () {
//     book.style.display = 'block';
// }

let img=document.getElementById('img');
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let lis=document.querySelectorAll('.bots>li');
let bannerBox = document.querySelector('.banner-box');
let imgArr = ['壁纸1.jpg', '壁纸2.jpg', '壁纸3.jpg', '壁纸4.jpg', '壁纸5.jpg'];
let i=0;

function banner(){
    for(let k=0;k<lis.length;k++){
        lis[k].className='';
    }
    img.src='image/' +imgArr[i];

    lis[i].className='active';
}
//自动
function autoBanner(){
    i++;
    if(i>imgArr.length-1){
        i=0;
    }
    banner();
}

let timer=setInterval(autoBanner,3000);

bannerBox.onmouseover=function(){
    clearInterval(timer);
}

bannerBox.onmouseout=function(){
    timer = setInterval(autoBanner, 3000);
}
//手动
next.onclick=function(){
    i++;
    if(i>imgArr.length-1){
        i=0;
    }
    banner();
}

prev.onclick = function () {
    i--;
    if (i <0) {
        i = imgArr.length-1;
    }
    banner();
}

for(let j=0;j<lis.length;j++){
    lis[j].onclick=function(){
        i=j;
        banner();
    }
}

// let list = ["开发不易，感谢理解", "", "感谢您的理解", "", "您的支持是我继续完善的动力"];
// let wrapText = querySelector('.wrap-text');
function rollFn() {
    var scrollWidth = document.querySelector(".roll").clientWidth
    var rollTextDiv = document.querySelector(".roll_text")
    var textWidth = rollTextDiv.clientWidth
    console.log(scrollWidth, textWidth)
    var i = scrollWidth;
    setInterval(function () {
        i--
        if (i < -textWidth) i = scrollWidth
        rollTextDiv.style.left = i + "px"
    }, 20);
}



