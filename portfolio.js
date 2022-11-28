let head = document.getElementsByClassName("top");
for (const i of head) {
  i.style.color = "var(--yellow)";
}
let heading1 = document.getElementsByClassName("publication-headline");
for (const i of heading1) {
  i.style.backgroundColor = "var(--gray1)";
  i.style.paddingBottom = "15px";
  i.style.paddingTop = "15px";
  i.style.fontSize = "2rem";
}
let heading2 = document.getElementsByClassName("heading2");
for (const i of heading2) {
  i.style.backgroundColor = "var(--white)";
  i.style.color = "var(--black)";
  i.style.border = "2px solid black";
  i.style.paddingBottom = "12px";
  i.style.paddingTop = "12px";
  i.style.fontSize = "1.5rem";
  i.style.fontWeight = "bold";
}

let projectbody = document.getElementsByClassName("publication-text");
for (const i of projectbody) {
  i.style.display = "grid";
  i.style.fontSize = "20px";
  i.style.fontFamily = 'Georgia, "Times New Roman", Times, serif';
  i.style.padding = "25px";
}
let projecttext = document.getElementsByClassName("publication-body");
for (const i of projecttext) {
  i.style.backgroundColor = "var(--gray2)";
  i.style.border = "2px solid var(--white)";
}

let msg = document.getElementById("msg");
let form = document.querySelector("form");
function sendEmail() {
  Email.send({
    SecureToken: "be7e67b5-cdad-4350-9956-ddab77f922b1",
    To: "tahniat.niger@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name:" +
      document.getElementById("username").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully! ";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error !", error.message));
}
