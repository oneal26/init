let subButton = document.querySelector("#thisButton");
let enterButton = document.getElementById("enter");

class tronChild{
    constructor(health, stamina, skill){
        this.health = health;
        this.stamina = stamina;
        this.skill = skill;
    }

    heal(){
        
    }

}




subButton.addEventListener("click", function(e){
    let ansInput = document.querySelector('#grabThis');
    //let ans = document.querySelector("#grabThis").value;
    let ans = ansInput.value;
    let unlockButton = false;

    //document.querySelector('#grabThis').value = '';
    console.log(e);
    e.preventDefault();

    if(ans.includes("the internet")){
        unlockButton = true;
        console.log(unlockButton);
    }else if(ans.includes("theinternet")){
        unlockButton = true;
        console.log(unlockButton);
    }else{
        unlockButton = false;
        console.log(unlockButton);
    }
    
    if(unlockButton === true){
        //console.log(enterButton.removeAttribute("disabled"));
        ansInput.value = 'd̴͔̩̂̇o̷̝͐̑n̸̦̗̈t̴̥͒ ̴̛̦̏g̴̳̥͚̈ȏ̴̦͓̝͒ ̴̭͕͙̾̐͋î̸͙͈ń̸̟̭̣'
        enterButton.disabled = false;
        enterButton.addEventListener("click", function(e){
            e.preventDefault(); //preventDefault() is the LIFE SAVER. it keeps the page from refreshing on submit. KEEPING YOUR DATA and allowing you to use it!
            window.location.href = "index2.html";
               
        })
        // window.location.href = "index2.html";
    } else {
        ansInput.value = 'INCORRECT!'
    }
})



