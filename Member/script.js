// let Name = document.getElementById("#Name").innerHTML;
// let DOB = document.getElementById("#DOB").innerHTML;
// let Gender = document.getElementById("#Gender").innerHTML;
// let Address = document.getElementById("#Address").innerHTML;
// let Phone = document.getElementById("#Phone").innerHTML;
// let Email = document.getElementById("#Email").innerHTML;
// let Password = document.getElementById("#Password").innerHTML;
// let Dailyletter = document.getElementById("#Dailyletter").innerHTML;

// console.log(Name)
// console.log(DOB)
// console.log(Gender)
// console.log(Address)
// console.log(Phone)
// console.log(Email)
// console.log(Password)
// console.log(Dailyletter)

function validation() {
  const form = document.forms["member"];
  const Name = form["Name"].value;
  const DOB = form["DOB"].value;
  const Gender = form["Gender"].value;
  const Address = form["Address"];
  const Phone = form["Phone"];
  const Email = form["Email"].value;
  const Password = form["Password"];
  const Dailyletter = form["DailyLetter"].value;
  document.getElementById("error").innerHTML = kosong;
  let name = Name;
  document.getElementById("nametext").innerHTML = name;
  return false;

  if (Gender != "Male" || Gender != "Female") {
    document.getElementById("genderalert").innerHTML = "choose your gender";
    return false;
  }

  if (!Email.endsWith("@gmail.com") || !Email.endsWith("@binus.ac.id") || !Email.endsWith("@yahoo.com")) {
    document.getElementById("emailalert").innerHTML = "Wrong email format";
    return false;
  }

  if (Password.length() < 8) {
    document.getElementById("passwordalert").innerHTML = "8 characters minimal";
    return false;
  }
}
