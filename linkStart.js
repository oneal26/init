let button = document.querySelector("#thisButton");



button.addEventListener("click", function(){
    let ans = document.querySelector("#grabThis").value;
    
    if(ans.includes("the internet")){
        document.write("deskTop");
    }else if(ans.includes("theinternet")){
        document.write("deskTop");
    }else{
        document.write("invalid.");
    }

    
})