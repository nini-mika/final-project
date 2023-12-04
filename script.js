let mobileMenue = document.querySelector(".header_nav");
let burger = document.querySelector(".fa-bars")
let xmark = document.querySelector(".fa-circle-xmark")

burger.addEventListener("click", () => { mobileMenue.classList.add("show");
burger.style.display = "none";
xmark.style.display = "block";
})

xmark.addEventListener("click", () => { mobileMenue.classList.remove("show");
burger.style.display = "block";
xmark.style.display = "none";
})