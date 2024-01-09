window.addEventListener("scroll",function () {
    console.log(this);
    console.log(this.scrollY);
    if (this.scrollY > 720) {
        console.log("inside if");
        // console.log(document.getElementById("main-menu").classList);        
        document.getElementById("main-menu").classList.add("fixedmenu")
    } else {
        document.getElementById("main-menu").classList.remove("fixedmenu")
        console.log("inside else");
    }
})