//Code for Monday
function myFunction() {
    var food = ["Bread & Egg", "Rice & Stew", "Yam & Vegetables", "Porriadge", "Spagetti", "Amala & Ewedu", "Jellof Indomie"];
let len = food.length;

let text = "";
for(let i = 0; i < len; i++){
    text += food[i] + "<br>";
}
document.getElementById("demo").innerHTML = text; 

}
function myOwn() {
    var food = ["Bread & Egg", "Rice & Stew", "Yam & Vegetables", "Porriadge", "Spagetti", "Amala & Ewedu", "Jellof Indomie"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo1").innerHTML = "Break-fast is " + food[0];
}
else if (time < 18){
    meal = document.getElementById("demo1").innerHTML = "Launch is " + food[3];
}
else {
    meal = document.getElementById("demo1").innerHTML = "Dinner is " + food[1];
}

document.getElementById("demo1").innerHTML = meal;    
}

//Code for Teusday
function myTeusday() {
    var food2 = ["MoiMoi & Salad", "Banga & Statch", "Yam & Stew", "Macaroni", "Coconut Rice", "Fufu & Gbegiri", "Plantain"];
let len = food2.length;

let text2 = "";
for(let i = 0; i < len; i++){
    text2 += food2[i] + "<br>";
}
document.getElementById("demox").innerHTML = text2; 

}
function myOwn2() {
    var food2 = ["Akara & Pap", "Rice & Stew", "Yam & Vegetables", "Cocoa yam & stew", "Spagetti", "Amala & Ewedu", "Jellof Indomie"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo2").innerHTML = "Break-fast is " + food2[0];
}
else if (time < 18){
    meal = document.getElementById("demo2").innerHTML = "Launch is " + food2[3];
}
else {
    meal = document.getElementById("demo2").innerHTML = "Dinner is " + food2[1];
}

document.getElementById("demo2").innerHTML = meal;    
}

//Code for Wednesday
function myWed() {
    var food3 = ["Toast bread & Tea", "Banga & Statch", "Yam & Stew", "Ofada Rice", "FriedRice & Plantain", "Semo & Ogbono", "Fried Yam & Potatoe"];
let len = food3.length;

let text3 = "";
for(let i = 0; i < len; i++){
    text3 += food3[i] + "<br>";
}
document.getElementById("demoy").innerHTML = text3; 

}
function myOwn3() {
    var food3 = ["Toast bread & Tea", "Banga & Statch", "Yam & Stew", "Ofada rice", "FriedRice & Plantain", "Semo & Ogbono", "Fried Yam & Potatoe"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo3").innerHTML = "Break-fast is " + food3[0];
}
else if (time < 18){
    meal = document.getElementById("demo3").innerHTML = "Launch is " + food3[3];
}
else {
    meal = document.getElementById("demo3").innerHTML = "Dinner is " + food3[1];
}

document.getElementById("demo3").innerHTML = meal;    
}
//Code for Thursday
function myThu() {
    var food4 = ["Moimoi & Eko", "Spaghetti & Egg", "Pondo Yam & Okro", "Beans & Garri", "Bread & Stew", "Beans & Plantain", "Golden Morn"];
let len = food4.length;

let text4 = "";
for(let i = 0; i < len; i++){
    text4 += food4[i] + "<br>";
}
document.getElementById("demoz").innerHTML = text4; 

}
function myOwn4() {
    var food4 = ["Moimoi & Eko", "Spaghetti & Egg", "Pondo Yam & Okro", "Beans & Garri", "Bread & Stew", "Beans & Plantain", "Golden Morn"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo4").innerHTML = "Break-fast is " + food4[0];
}
else if (time < 18){
    meal = document.getElementById("demo4").innerHTML = "Launch is " + food4[3];
}
else {
    meal = document.getElementById("demo4").innerHTML = "Dinner is " + food4[1];
}

document.getElementById("demo4").innerHTML = meal;    
}
//Code for Friday
function myFri() {
    var food5 = ["Corn flaske", "Fried Indomie", "Ewa goi & Bread", "CocoaYam & Sause", "Moimoi & Salad", "Plantain Porridge", "Chinese rice"];
let len = food5.length;

let text5 = "";
for(let i = 0; i < len; i++){
    text5 += food5[i] + "<br>";
}
document.getElementById("demoa").innerHTML = text5; 

}
function myOwn5() {
    var food5 = ["Corn flaske", "Fried Indomie", "Ewa goi & Bread", "CocoaYam & Sause", "Moimoi & Salad", "Plantain Porridge", "Chinese rice"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo5").innerHTML = "Break-fast is " + food5[0];
}
else if (time < 18){
    meal = document.getElementById("demo5").innerHTML = "Launch is " + food5[3];
}
else {
    meal = document.getElementById("demo5").innerHTML = "Dinner is " + food5[1];
}

document.getElementById("demo5").innerHTML = meal;    
}
//Code for Saturday
function mySat() {
    var food6 = ["Oat Milk", "Beans & Corn", "Salad", "Eko & Ewedu", "Bread & Butter", "Roasted Yam & Fried stew", "Biscuit Flaske"];
let len = food6.length;

let text6 = "";
for(let i = 0; i < len; i++){
    text6 += food6[i] + "<br>";
}
document.getElementById("demob").innerHTML = text6; 

}
function myOwn6() {
    var food6 = ["Oat Milk", "Beans & Corn", "Salad", "Eko & Ewedu", "Bread & Butter", "Roasted Yam & Fried stew", "Biscuit Flaske"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo6").innerHTML = "Break-fast is " + food6[0];
}
else if (time < 18){
    meal = document.getElementById("demo6").innerHTML = "Launch is " + food6[3];
}
else {
    meal = document.getElementById("demo6").innerHTML = "Dinner is " + food6[1];
}

document.getElementById("demo6").innerHTML = meal;    
}
//Code for Sunday
function mySun() {
    var food7 = ["Jellofrice & Egg", "Bread & Sardine", "Yam & Cornbeef", "Italian Rice", "Vegetable Sause", "Fruit Salad", "Abacha"];
let len = food7.length;

let text7 = "";
for(let i = 0; i < len; i++){
    text7 += food7[i] + "<br>";
}
document.getElementById("democ").innerHTML = text7; 

}
function myOwn7() {
    var food7 = ["Oat Milk", "Beans & Corn", "Salad", "Eko & Ewedu", "Bread & Butter", "Roasted Yam & Fried stew", "Biscuit Flaske"];
const time = new Date().getHours();
let meal = "";

if (time < 12){
    meal = document.getElementById("demo7").innerHTML = "Break-fast is " + food7[0];
}
else if (time < 18){
    meal = document.getElementById("demo7").innerHTML = "Launch is " + food7[3];
}
else {
    meal = document.getElementById("demo7").innerHTML = "Dinner is " + food7[1];
}

document.getElementById("demo7").innerHTML = meal;    
}