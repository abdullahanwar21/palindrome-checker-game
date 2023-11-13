let btn = document.getElementById("btn");
let res = document.querySelector("p");

let inputValue = document.getElementById("text");
btn.addEventListener("click", function () {
  let fin = inputValue.value.split("").reverse("").join("");
  res.innerText = fin;
  if (res) {
    inputValue.value = "";
    if (fin === res.innerText.split("").reverse("").join("")) {
      res.innerText = `Yes , ${fin} is a Palindrome`;
    } else {
      res.innerHTML = `No , ${res.textContent} is not a Palindrome`;
    }
  }
});
