var nineBtn = document.querySelector("#nine")
var tenBtn = document.querySelector("#ten")
var elevBtn = document.querySelector("#elev")
var twelBtn = document.querySelector("#twel")
var oneBtn = document.querySelector("#one")
var twoBtn = document.querySelector("#two")
var threeBtn = document.querySelector("#three")
var fourBtn = document.querySelector("#four")
var fiveBtn = document.querySelector("#five")
var savedNine= localStorage.getItem("nIne")
var savedTen= localStorage.getItem("nIne")
var savedElev= localStorage.getItem("nIne")
var savedTwel= localStorage.getItem("nIne")
var savedOne= localStorage.getItem("nIne")
var savedTwo= localStorage.getItem("nIne")
var savedThree= localStorage.getItem("nIne")
var savedFour= localStorage.getItem("nIne")
var savedFive= localStorage.getItem("nIne")

//know Time
// change color on time (if)

//code to work btn
nineBtn.addEventListener("click",function(){
//code to save info to local storage
console.log(nineTxt.value)
localStorage.setItem("nIne",nineTxt.value)
})

//code to get info to show up
if(savedNine){
    nineTxt.innerHTML= savedNine
}

