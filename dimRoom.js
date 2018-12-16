let linkDeskTop = document.querySelector("#zeldaDeskTop");
let linkBrowser = document.querySelector("#zeldaBrowser");
let linkExe = document.querySelector("#zeldaExe");
let linkGrid = document.querySelector("#zeldaGrid");

linkDeskTop.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "deskTop.html";
})

linkBrowser.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "browser.html";
})

linkExe.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "exe.html";
})

linkGrid.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "box-for-movement.html";
})



