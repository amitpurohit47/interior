const ham = document.querySelector(".ham");
const headerLinks = document.querySelectorAll(".header-link");
const header = document.querySelector("header");
const hambar2 = document.querySelector(".ham-bar2");
const logoCont = document.querySelector(".logo-container");
const form = document.querySelector("form");

let isHamOpen = false;

const hamToggle = (e) => {
  if (isHamOpen) {
    header.classList.remove("header-open");
    headerLinks.forEach((link) => link.classList.remove("header-link-open"));
    hambar2.classList.remove("ham-bar2-open");
    logoCont.classList.remove("logo-container-open");
    isHamOpen = false;
  } else {
    header.classList.add("header-open");
    headerLinks.forEach((link) => link.classList.add("header-link-open"));
    hambar2.classList.add("ham-bar2-open");
    logoCont.classList.add("logo-container-open");
    isHamOpen = true;
  }
};

window.onload = function () {
  document.querySelector(".loader").style.display = "none";
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formBody = {
    name,
    email,
    message,
  };
  try {
    const res = await fetch("https://dazzle-interior-backend.herokuapp.com/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formBody),
    });
    if(res.status === 200){
        alert("We've received your message.\nWe'll reach out to you shortly!");
    }
  } catch (error) {
    console.log(error);
  }
};

ham.addEventListener("click", hamToggle);
headerLinks[4].addEventListener("click", hamToggle);
form.addEventListener("submit", handleSubmit);
