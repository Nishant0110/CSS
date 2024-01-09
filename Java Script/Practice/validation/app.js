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

document.getElementById("e-mail").addEventListener("keyup", function () {
    console.log(this.value);
    // let RegEx = /^([a-z])+$/ // only small apha a-z
    // let RegEx = /^([A-Z])+$/ // only cap apha A-Z
    // let RegEx = /^([A-Za-z])+$/ // only cap apha A-Z
    let RegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    console.log(RegEx.test(this.value));
})
// document.getElementById("tel").addEventListener("keyup", function () {
//     console.log(this.value);
//     let RegEx =/^\d{10}$/;
//     console.log(RegEx.test(this.value));
// })

function validatePhoneNumber() {
    var telInput = document.getElementById('tel');
    var telError = document.getElementById('telError');
    var telValue = telInput.value.trim();

    // Check if the telephone number is blank or not 10 digits
    if (telValue === '' || telValue.length !== 10) {
      telError.textContent = 'Please enter a valid 10-digit telephone number.';
    } else {
      telError.textContent = ''; // Clear error message if valid
    }
  }


// a.onblur=function(){
//     alert("Exit")
// }
// a.onfocus=function(){
//     a.style.backgroundColor="yellow"
// }
