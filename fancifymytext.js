function biggerText() {
  alert("Hello, world!");
  document.getElementById("textArea").style.fontSize = "24pt";
}

function fancifyText() {
  var textArea = document.getElementById("textArea");
  var fancy = document.getElementById("fancy");

  if (fancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  var textArea = document.getElementById("textArea");

  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");

  for (var i = 0; i < sentences.length - 1; i++) {
    var words = sentences[i].trim().split(" ");

    if (words.length > 0) {
      words[words.length - 1] = words[words.length - 1] + "-Moo";
      sentences[i] = words.join(" ");
    }
  }

  textArea.value = sentences.join(".");
}
