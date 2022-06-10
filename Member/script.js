function emailvalidation(email) {
  let at = false;
  let titik = false;
  for (let index = 0; index < email.length; index++) {
    const element = email[index];
    if (element == "@") {
      at = true;
    } else if (element == ".") {
      titik = true;
    }
  }
  if (at == true && titik == true) {
    return true;
  } else {
    return false;
  }
}

function validate() {
  const form = document.forms["regis"];
  const Name = form["Name"].value;
  const DOB = form["DOB"].value;
  const Gender = form["Gender"].value;
  const Address = form["Address"].value;
  const Phone = form["Phone"].value;
  const Email = form["Email"].value;
  const Password = form["Password"].value;
  const Dailyletter = form["DailyLetter"].value;

  let valid = 0;
  if (!Name) {
    document.getElementById("alert-nama").innerHTML = "Please input your name";
  } else {
    document.getElementById("alert-nama").innerHTML = "";
    valid++;
  }

  if (!DOB) {
    document.getElementById("alert-dob").innerHTML = "Please input your date of birth";
  } else {
    document.getElementById("alert-dob").innerHTML = "";
    valid++;
  }

  if (!Gender) {
    document.getElementById("alert-gender").innerHTML = "Please choose your gender";
  } else {
    document.getElementById("alert-gender").innerHTML = "";
    valid++;
  }

  if (!Address) {
    document.getElementById("alert-address").innerHTML = "Please input your address";
  } else {
    document.getElementById("alert-address").innerHTML = "";
    valid++;
  }

  if (!Phone) {
    document.getElementById("alert-phone").innerHTML = "Please input your phone number";
  } else if (!Phone.startsWith("08")) {
    document.getElementById("alert-phone").innerHTML = "Phone number must start with '08'";
  } else if (Phone.length != 12) {
    document.getElementById("alert-phone").innerHTML = "Phone number length must be 12";
  } else {
    document.getElementById("alert-phone").innerHTML = "";
    valid++;
  }

  if (!Password) {
    document.getElementById("alert-password").innerHTML = "Please input your password";
  } else if (Password.length < 8) {
    document.getElementById("alert-password").innerHTML = "Password must be more than 8 chracters";
  } else {
    document.getElementById("alert-password").innerHTML = "";
    valid++;
  }

  if (!Dailyletter) {
    document.getElementById("alert-daily").innerHTML = "Daily Letter cannot be empty";
  } else if (Dailyletter.split(" ").length < 3) {
    document.getElementById("alert-daily").innerHTML = "Daily Letter must contain at least 3 words";
  } else {
    document.getElementById("alert-daily").innerHTML = "";
    valid++;
  }

  if (!Email) {
    document.getElementById("alert-email").innerHTML = "Please fill your email address here";
  } else if (!emailvalidation(Email)) {
    document.getElementById("alert-email").innerHTML = "Invalid Email format";
  } else {
    document.getElementById("alert-email").innerHTML = "";
    valid++;
  }
  console.log(valid);
  if (valid != 8) {
    console.log(Name);
    console.log(DOB);
    console.log(Gender);
    console.log(Address);
    console.log(Phone);
    console.log(Email);
    console.log(Password);
    console.log(Dailyletter);
    return false;
  } else {
    alert("Account Created!");
    return true;
  }
}
