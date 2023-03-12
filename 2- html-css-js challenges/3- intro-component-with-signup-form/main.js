let inputs = document.getElementsByTagName("input");
let errorMsg = document.getElementsByClassName("error");
let errorEmail = document.getElementById("er-email");
let submitBtn = document.querySelector("button");

submitBtn.onclick = function (event) {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    //if an input is empty

    if (inputs[i].value.trim() === "") {
      errorMsg[i].style.setProperty("display", "block");
      inputs[i].style.setProperty("border", "1px solid hsl(0, 100%, 74%) ");
    }

    // if not empty
    else {
      errorMsg[i].style.setProperty("display", "none");
      inputs[i].style.setProperty("border", "2px solid #1ac91a");

      //if email isn't vaild

      if (inputs[2].value != "") {
        if (!(/\w+@\w+\.\w+/gi).test(inputs[2].value)) {
          inputs[2].style.setProperty("border", "1px solid hsl(0, 100%, 74%)");
          errorEmail.style.setProperty("display", "block");
          inputs[2].setAttribute("placeholder", "email@example.com");
        } else {
          errorEmail.style.setProperty("display", "none");
          inputs[2].style.setProperty("border", "2px solid #1ac91a");
        }
      }
    }
  }
};
