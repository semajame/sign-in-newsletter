// import "./css/style.css"

const error = document.querySelector(".error");

const input = document.querySelector(".text");

const sub = document.querySelector("#subscribe");

const success = document.querySelector("#success");

const main = document.querySelector("#main");


sub.addEventListener("click",(event)=>{
    event.preventDefault();

    const email = document.getElementById("email");

    const text = input.value;

    if(!text.includes("@company.com")){
        error.classList.add("active");
        input.style.backgroundColor = "hsl(4, 100%, 87%)";
        input.style.color = "hsl(4, 100%, 67%)";
        input.style.border = "1px solid hsl(4, 100%, 67%)";
    }

    if(text.includes("@company.com")){
        success.classList.add("active");
        main.style.display = "none";
        email.innerHTML = text;
    }

})
