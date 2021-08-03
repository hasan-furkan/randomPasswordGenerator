const display = document.querySelector("#input")
const button = document.querySelector(".button")
const copyBtn = document.querySelector(".far")
const copyActive = document.querySelector(".fas")
const body = document.querySelector("body")
const refresh = document.querySelector(".refresh")
const copyDisplay = document.querySelector(".copyDisplay")
const container = document.querySelector(".container")

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


function copyPassword() {
    display.select();
    display.setSelectionRange(0, 99999)
    document.execCommand("copy");
    refresh.style.display = "block"
    container.innerHTML= "password copied successfully"

  }

copyActive.addEventListener("click", () =>{
    copyPassword();
    
  })

refresh.addEventListener("click", () =>{
  location.reload();
})

  button.addEventListener("click", () =>{
    display.value = generator();   
    body.style.backgroundColor = color()
    copyActive.style.display = "block"
    copyBtn.style.display = "none"
    
})

