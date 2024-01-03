let a = document.querySelectorAll("input")
console.log(a);

a.forEach(input => {
    input.onblur = () => {
        let errormsg = input.parentNode.querySelector(".alertmsg")
        if (input.value.trim() === "" && input.id !== "birthdate") {
            if (!errormsg) {
                let b = document.createElement("div")
                b.className = "alertmsg"
                b.textContent = "This Field Is Required"
                input.parentNode.appendChild(b)
            }
        }
        else {
            if (errormsg) {
                errormsg.remove()
            }
        }
    }
})



























// let a=document.getElementById("firstname")

// a.onblur=function(){
//     alert("Exit")
// }
// a.onfocus=function(){
//     a.style.backgroundColor="yellow"
// }
