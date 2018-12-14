var $ = require('jQuery');


let button = document.querySelector("#thisButton");
let bodyColor = document.body.style.background = "#000500";
let fontColor = document.body.style.color = "lime";


button.addEventListener("click", function(){
    let ans = document.querySelector("#grabThis").value;
    if(ans.includes("theinternet")){

        document.write("deskTop");
        bodyColor;
        fontColor;
   
    }else{
        document.write("wrong")
        bodyColor;
        fontColor;
    }
});




