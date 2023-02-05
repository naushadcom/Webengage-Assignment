var email = "";
var phoneNumber = "";
var code = "";

const handleEmail = () => {
  email = document.getElementById("email").value;
};


const handleNumber = () => {
  phoneNumber = document.getElementById("number").value;
};


const handleCode = () => {
  code = document.getElementById("code").value;
  console.log(code);
};


const submit = () => {
  if (phoneNumber.length < 10) {
    alert(" You have entered an invalid Mobile number");
  } else if (phoneNumber.length > 10) {
    alert(" You have entered an invalid Mobile number");
  } else if (email.length < 15) {
    alert("You have entered an invalid email address -  It is too short - length sould be equal or more that 5 character excluding @gmail.com ");
  } else if (!email.includes("@gmail.com")) {
    alert("You have entered an invalid email address");
  } else {
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Phone", JSON.stringify(phoneNumber));
    localStorage.setItem("Code", JSON.stringify(code));

    window.location.href="./thankyoupage.html";
  }
};
