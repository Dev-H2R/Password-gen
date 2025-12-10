function generatePassword() {
  var len = document.getElementById("length").value;

  var upper = document.getElementById("uppercase").checked;
  var lower = document.getElementById("lowercase").checked;
  var number = document.getElementById("numbers").checked;
  var symbol = document.getElementById("symbols").checked;

  var characters = "";
  var result = "";

  if (upper) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lower) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (number) {
    characters += "0123456789";
  }

  if (symbol) {
    characters += "!@#$%^&*()";
  }

  if (characters === "") {
    alert("Please select at least one option");
    return;
  }

  for (var i = 0; i < len; i++) {
    var rand = Math.floor(Math.random() * characters.length);
    result += characters[rand];
  }

  document.getElementById("password").value = result;
}

function copyPassword() {
  var field = document.getElementById("password");
  field.select();
  document.execCommand("copy");
  alert("Copied!");
}
