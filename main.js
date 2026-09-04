let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
});

let form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || subject === "" || message === "") {
    formMessage.innerText = "Please fill in all fields.";
    return;
  }

  if (!email.includes("@")) {
    formMessage.innerText = "Please enter a valid email.";
    return;
  }

  formMessage.innerText = "Message sent successfully!";

  form.reset();
});
