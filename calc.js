const box = document.querySelector("#check");
console.log(box.checked);
function ReCheck() {
  const box = document.querySelector("#check");
  console.log(box.checked);
  if (box.checked == true) {
    document.getElementById("NegOrNot").innerHTML = 'loss';  
    } else if (box.checked == false) {
    document.getElementById("NegOrNot").innerHTML = 'gain';
    } else {
    }
}
