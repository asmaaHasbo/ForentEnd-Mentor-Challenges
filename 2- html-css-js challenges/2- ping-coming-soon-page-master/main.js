let btn = document.querySelector("button");
let emailInput = document.querySelector("input");
let errorMsg = document.querySelector("i")

btn.onclick = function (evnt) {
    evnt.preventDefault();
    if ( (/\w+@\w+\.\w+/ig).test( emailInput.value)) {
        emailInput.style.borderColor = "";
        errorMsg.style.display = "";
    }else{
        emailInput.setAttribute("placeholder" , "example@email.com");
        emailInput.style.borderColor = "red";
        errorMsg.style.display = "block";

    }
}