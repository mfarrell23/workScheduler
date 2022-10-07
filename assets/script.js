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
var savedTen= localStorage.getItem("tEn")
var savedElev= localStorage.getItem("eLev")
var savedTwel= localStorage.getItem("tWel")
var savedOne= localStorage.getItem("oNe")
var savedTwo= localStorage.getItem("tWo")
var savedThree= localStorage.getItem("tHree")
var savedFour= localStorage.getItem("fOur")
var savedFive= localStorage.getItem("fIve")
var time = document.querySelector('.time');
var txtId= ["#nineTxt", "#tenTxt", "#elevTxt", "#twelTxt", "#oneTxt","#twoTxt", "#threeTxt","#fourTxt", "#fiveTxt"] 

//code tells us the time
setInterval(function(){
    var todayTime= moment().format("LLLL,ss")
    $("#time").text(todayTime)
},1000)
//getTime()


//code to work btns
 nineBtn.addEventListener("click",function(){
     console.log(nineTxt.value)
     localStorage.setItem("nIne",JSON.stringify(nineTxt.value))
});

tenBtn.addEventListener("click",function(){
    console.log(tenTxt.value)
    localStorage.setItem("tEn",JSON.stringify(tenTxt.value))
});

elevBtn.addEventListener("click",function(){
    console.log(elevTxt.value)
    localStorage.setItem("eLev",JSON.stringify(elevTxt.value))
});
        
twelBtn.addEventListener("click",function(){
    console.log(twelTxt.value)
    localStorage.setItem("tWel",JSON.stringify(twelTxt.value))
});
            
oneBtn.addEventListener("click",function(){
    console.log(oneTxt.value)
    localStorage.setItem("oNe",JSON.stringify(oneTxt.value))
});
                
twoBtn.addEventListener("click",function(){
    console.log(twoTxt.value)
    localStorage.setItem("tWo",JSON.stringify(twoTxt.value))
});
                
threeBtn.addEventListener("click",function(){
    console.log(threeTxt.value)
    localStorage.setItem("tHree",JSON.stringify(threeTxt.value))
});
                        
fourBtn.addEventListener("click",function(){
    console.log(fourTxt.value)
    localStorage.setItem("fOur",JSON.stringify(fourTxt.value))
});
                            
fiveBtn.addEventListener("click",function(){
    console.log(fiveTxt.value)
    localStorage.setItem("fIve",JSON.stringify(fiveTxt.value))
    });  

//code to get info to show up
var savedNine= JSON.parse(localStorage.getItem("nIne"))
if(savedNine){
    nineTxt.innerHTML= savedNine
}

var savedTen= JSON.parse(localStorage.getItem("tEn"))
if(savedTen){
    tenTxt.innerHTML= savedTen
}

var savedElev= JSON.parse(localStorage.getItem("eLev"))
if(savedElev){
    elevTxt.innerHTML= savedElev
}

var savedTwel= JSON.parse(localStorage.getItem("tWel"))
if(savedTwel){
    twelTxt.innerHTML= savedTwel
}

var savedOne= JSON.parse(localStorage.getItem("oNe"))
if(savedOne){
    oneTxt.innerHTML= savedOne
}

var savedTwo= JSON.parse(localStorage.getItem("tWo"))
if(savedTwo){
    twoTxt.innerHTML= savedTwo
}

var savedThree= JSON.parse(localStorage.getItem("tHree"))
if(savedThree){
    threeTxt.innerHTML= savedThree
}

var savedFour= JSON.parse(localStorage.getItem("fOur"))
if(savedFour){
    fourTxt.innerHTML= savedFour
}

var savedFive= JSON.parse(localStorage.getItem("fIve"))
if(savedFive){
    nineTxt.innerHTML= savedFive
}

// change color on time (if)

var currentHr= parseInt(moment().format("H"));
for (let i = 0; i < txtId.length; i++) {
   
    var rowHr= parseInt(moment(9+i,"H").format("H"));
   
    if(currentHr===rowHr){
        $(txtId[i]).addClass("present")
    }else if(currentHr>rowHr){
        $(txtId[i]).addClass("past")
        console.log(txtId[i])
    }else{
        $(txtId[i]).addClass("future")
    }
}

