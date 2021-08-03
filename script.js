const display = document.querySelector("#input")
const button = document.querySelector(".button")
const copyBtn = document.querySelector(".far")
const copyActive = document.querySelector(".fas")
const body = document.getElementById("body")




function generator() {
    let password = "";
    let character = "!@$%^&*-_+=:|~?/.;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (var i = 0; i < 8; i++)
      password += character.charAt(Math.floor(Math.random() * character.length));
    return password;
    
}

function color() {
    let changeColor = "#"
    let char = "123456789ABCDEF"
    for(let i = 0; i<6; i++)
      changeColor = changeColor + char[Math.floor(Math.random() * 16)];
      return changeColor
    
  }

  button.addEventListener("click", () =>{
    display.value = generator();   
    body.style.backgroundColor = color()
    
})