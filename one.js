var P_ten;


function Calculate() {
  function splitIntoArray(num) {
    return Array.from(String(num), Number);
  }
  const NaN = splitIntoArray(document.getElementById("SUS").value);
  if (NaN.length == 0){
      var P_zero = 404
      alert('Make shure to put something down without the symbols "+", "-", "E", or "e" ')
  } else if(parseInt(document.getElementById("SUS").value) <= 0){
    var P_zero = 404;
  } else{
    var P_zero = parseInt(document.getElementById("SUS").value);
  }
  var P_one = P_zero / 12;
  var P_two = P_one * 0.12;
  var P_three = P_one * 0.07;
  var P_four = P_one * 0.062;
  var P_five = P_one * 0.0145;
  var P_six = P_one * 0.01;
  var P_seven = P_one * 0.05;
  var P_eight = 180;
  var P_nine =
    P_two + P_three + P_four + P_five + P_six + P_seven + P_eight;
  P_ten = P_one - P_nine;
  var P_house = P_one / 3;
  document.getElementById("YT").innerHTML = '$'+P_zero.toFixed(2);
  document.getElementById("GM").innerHTML = '$'+P_one.toFixed(2);
  document.getElementById("FT").innerHTML = '$'+P_two.toFixed(2);
  document.getElementById("ST").innerHTML = '$'+P_three.toFixed(2);
  document.getElementById("SS").innerHTML = '$'+P_four.toFixed(2);
  document.getElementById("MT").innerHTML = '$'+P_five.toFixed(2);
  document.getElementById("SD").innerHTML = '$'+P_six.toFixed(2);
  document.getElementById("RI").innerHTML = '$'+P_seven.toFixed(2);
  document.getElementById("MI").innerHTML = '$'+P_eight.toFixed(2);
  document.getElementById("TD").innerHTML = '$'+P_nine.toFixed(2);
  document.getElementById("TB").innerHTML = P_ten.toFixed(2);
  document.getElementById("HOME").innerHTML = '$'+P_house.toFixed(2);
}
// var P_ten = document.getElementById("TB").innerHTML
function Calc2() {
  if (document.getElementById("NegOrNot").innerHTML == 'loss') {
    var P_eleven = parseInt(document.getElementById("SUSSY").value * -1)
    console.log('as')
  } else if (document.getElementById("NegOrNot").innerHTML == 'gain') {
    var P_eleven = parseInt(document.getElementById("SUSSY").value * 1)
    console.log('sas')
  }
  var P_twelve = P_ten + P_eleven;
  document.getElementById("TTT").innerHTML = '$'+P_twelve;
}
