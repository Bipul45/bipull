//==============================
// PREMIUM BIRTHDAY SCRIPT
// PART 1
//==============================

let currentPage = 1;
let password = "";
let typingSpeed = 70;

//------------------------------
// PASSWORD
//------------------------------

function press(value){

if(password.length>=4)return;

password += value;

document.getElementById("password").value=password;

navigator.vibrate?.(20);

}

function clearPass(){

password="";

document.getElementById("password").value="";

}

function checkPassword(){

const error=document.getElementById("error");

if(password==="2008"){

error.innerHTML="";

goToPage(2);

startTyping(
"typing1",
"🎉 Happy Birthday Bharti ❤️"
);

}
else{

error.innerHTML="❌ Wrong Password";

error.style.color="#ffd54f";

password="";

document.getElementById("password").value="";

shake();

}

}

//------------------------------
// SHAKE EFFECT
//------------------------------

function shake(){

const page=document.getElementById("page1");

page.animate([

{transform:"translateX(0px)"},
{transform:"translateX(-10px)"},
{transform:"translateX(10px)"},
{transform:"translateX(-10px)"},
{transform:"translateX(0px)"}

],{

duration:400

});

}

//------------------------------
// PAGE CHANGE
//------------------------------

function goToPage(page){

document.querySelectorAll(".page").forEach(function(item){

item.classList.remove("active");

});

document.getElementById("page"+page).classList.add("active");

currentPage=page;

pageLoaded(page);

window.scrollTo({

top:0,

behavior:"smooth"

});

}

//------------------------------
// NEXT BUTTON
//------------------------------

function nextPage(page){

goToPage(page);

}

//------------------------------
// PAGE EVENTS
//------------------------------

function pageLoaded(page){

switch(page){

case 2:

startTyping(

"typing1",

"🎂 Happy Birthday Bharti ❤️"

);

break;

case 3:

startTyping(

"typing2",

"Yeah! It is your birthday. A Special Birthday Wish By Bipul ❤️"

);

break;

}

}

//------------------------------
// TYPE WRITER
//------------------------------

function startTyping(id,text){

let i=0;

const box=document.getElementById(id);

box.innerHTML="";

clearInterval(box.timer);

box.timer=setInterval(()=>{

if(i<text.length){

box.innerHTML+=text.charAt(i);

i++;

}
else{

clearInterval(box.timer);

}

},typingSpeed);

}

//------------------------------
// HEART EFFECT
//------------------------------

document.addEventListener("click",function(e){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="25px";

heart.style.pointerEvents="none";

heart.style.transition="1.2s";

heart.style.zIndex="9999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120px) scale(2)";

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1300);

});

//------------------------------
// BUTTON RIPPLE
//------------------------------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(){

this.animate([

{transform:"scale(1)"},

{transform:"scale(.92)"},

{transform:"scale(1)"}

],{

duration:250

});

});

});

//------------------------------
// PRELOAD
//------------------------------

window.onload=function(){

document.getElementById("page1").classList.add("active");

};

//==============================
// PART 2
// Envelope + Wish + Music
//==============================

//---------------
// ENVELOPE OPEN
//---------------

function openLetter(){

const env=document.getElementById("envelope");
const box=document.getElementById("wishBox");

env.style.transition="1s";
env.style.transform="rotateX(180deg) scale(1.1)";
env.style.opacity=".2";

setTimeout(()=>{

env.style.display="none";

box.style.display="block";

box.animate([

{opacity:0,transform:"translateY(60px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:700,
fill:"forwards"

});

startTyping(
"typing3",

`Dear Bharti ❤️

Today is the most beautiful day because it is your Birthday.

I wish you endless happiness, success, smiles and love.

May God always protect you and keep you healthy.

Thank you for being such a beautiful part of my life.

Stay Happy...
Stay Blessed...
Keep Smiling...

❤️ Happy Birthday Once Again ❤️

— Bipul`

);

},900);

}

//-------------------------
// PAGE EVENTS
//-------------------------

const oldPageLoaded = pageLoaded;

pageLoaded=function(page){

oldPageLoaded(page);

switch(page){

case 6:

birthdayAnimation();

break;

case 7:

musicAnimation();

break;

}

};

//-------------------------
// DATE ANIMATION
//-------------------------

function birthdayAnimation(){

const date=document.querySelector("#page6 h1");

date.animate([

{transform:"scale(.5)",opacity:0},

{transform:"scale(1.2)",opacity:1},

{transform:"scale(1)"}

],{

duration:1200

});

}

//-------------------------
// MUSIC
//-------------------------

let isPlaying=false;

function playSong(){

const song=document.getElementById("song");

const icon=document.querySelector(".musicIcon");

if(!isPlaying){

song.play();

icon.style.animation="spin 4s linear infinite";

isPlaying=true;

}
else{

song.pause();

icon.style.animation="none";

isPlaying=false;

}

}

//-------------------------
// AUTO PLAY AFTER CLICK
//-------------------------

document.body.addEventListener("click",function(){

const song=document.getElementById("song");

if(song.paused && isPlaying){

song.play().catch(()=>{});

}

});

//-------------------------
// GLOW EFFECT
//-------------------------

setInterval(()=>{

document.querySelectorAll("button").forEach(btn=>{

btn.animate([

{

boxShadow:"0 0 10px #ff66aa"

},

{

boxShadow:"0 0 35px #ff66aa"

},

{

boxShadow:"0 0 10px #ff66aa"

}

],{

duration:1500

});

});

},1800);

//-------------------------
// MUSIC ICON FLOAT
//-------------------------

setInterval(()=>{

const icon=document.querySelector(".musicIcon");

if(icon){

icon.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:1500

});

}

},1600);

//-------------------------
// SPIN STYLE
//-------------------------

const style=document.createElement("style");

style.innerHTML=`

@keyframes spin{

0%{

transform:rotate(0deg);

}

100%{

transform:rotate(360deg);

}

}

`;

document.head.appendChild(style);

//==============================
// PART 3
// Gallery + Confetti + Final
//==============================

//--------------------
// IMAGE GALLERY
//--------------------

const images=[

"assets/images/1.jpg",
"assets/images/2.jpg",
"assets/images/3.jpg",
"assets/images/4.jpg",
"assets/images/5.jpg"

];

let currentImage=0;

function openImage(index){

currentImage=index;

const viewer=document.getElementById("viewer");

viewer.style.display="flex";

document.getElementById("fullImage").src=images[currentImage];

viewer.animate([

{opacity:0},

{opacity:1}

],{

duration:400

});

}

function closeViewer(){

document.getElementById("viewer").style.display="none";

}

function nextImageView(){

currentImage++;

if(currentImage>=images.length){

currentImage=0;

}

document.getElementById("fullImage").src=images[currentImage];

}

function prevImage(){

currentImage--;

if(currentImage<0){

currentImage=images.length-1;

}

document.getElementById("fullImage").src=images[currentImage];

}

//--------------------
// SWIPE SUPPORT
//--------------------

let startX=0;

const viewer=document.getElementById("viewer");

viewer.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

viewer.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(endX-startX>60){

prevImage();

}

if(startX-endX>60){

nextImageView();

}

});

//--------------------
// FINAL PAGE
//--------------------

const oldNext=nextPage;

nextPage=function(page){

oldNext(page);

if(page==9){

showFinal();

}

}

//--------------------
// FINAL TYPING
//--------------------

function showFinal(){

startTyping(

"typing4",

"❤️ Once Again Happy Birthday Bharti ❤️"

);

launchConfetti();

fireworks();

}

//--------------------
// CONFETTI
//--------------------

function launchConfetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="8px";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.borderRadius="50%";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

c.style.zIndex="9999";

document.body.appendChild(c);

c.animate([

{

transform:"translateY(0) rotate(0deg)",

opacity:1

},

{

transform:`translateY(${window.innerHeight+100}px) rotate(720deg)`,

opacity:0

}

],{

duration:3000+Math.random()*2000

});

setTimeout(()=>{

c.remove();

},5000);

}

}

//--------------------
// FIREWORKS
//--------------------

function fireworks(){

let interval=setInterval(()=>{

let fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*70+"vh";

fire.style.fontSize=(30+Math.random()*30)+"px";

fire.style.zIndex="9999";

document.body.appendChild(fire);

fire.animate([

{

transform:"scale(0)",

opacity:0

},

{

transform:"scale(2)",

opacity:1

},

{

transform:"scale(3)",

opacity:0

}

],{

duration:1200

});

setTimeout(()=>{

fire.remove();

},1200);

},400);

setTimeout(()=>{

clearInterval(interval);

},10000);

}

//--------------------
// FLOATING HEARTS
//--------------------

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

heart.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:"translateY(-110vh)",

opacity:0

}

],{

duration:5000

});

setTimeout(()=>{

heart.remove();

},5000);

},350);
