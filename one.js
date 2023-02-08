function Calculate() {
    if (parseInt(document.getElementById("SUS").value) <= 0){
        var P_zero = 1
    } else{
        var P_zero = parseInt(document.getElementById("SUS").value);

    }
    console.log(typeof P_zero);
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
    var P_ten = P_one - P_nine;
    var P_house = P_one / 3;
    document.getElementById("YT").innerHTML = '$'+P_zero;
    document.getElementById("GM").innerHTML = '$'+P_one;
    document.getElementById("FT").innerHTML = '$'+P_two;
    document.getElementById("ST").innerHTML = '$'+P_three;
    document.getElementById("SS").innerHTML = '$'+P_four;
    document.getElementById("MT").innerHTML = '$'+P_five;
    document.getElementById("SD").innerHTML = '$'+P_six;
    document.getElementById("RI").innerHTML = '$'+P_seven;
    document.getElementById("MI").innerHTML = '$'+P_eight;
    document.getElementById("TD").innerHTML = '$'+P_nine;
    document.getElementById("TB").innerHTML = '$'+P_ten;
    document.getElementById("HOME").innerHTML = '$'+P_house;
  }
