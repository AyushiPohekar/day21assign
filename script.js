var ele=document.getElementById("demo");
var ele1=document.createElement("div");
ele1.setAttribute("class","container");
ele1.append(ele);
document.body.append(ele1);
setTimeout(myTimeout1, 1000) 
setTimeout(myTimeout2, 3000) 
setTimeout(myTimeout3, 5000) 
setTimeout(myTimeout4, 7000) 
setTimeout(myTimeout5, 9000) 
setTimeout(myTimeout6, 11000) 
setTimeout(myTimeout7, 13000) 
setTimeout(myTimeout8, 15000) 
setTimeout(myTimeout9, 17000) 
setTimeout(myTimeout10, 19000) 
setTimeout(myTimeout11, 21000) 


function myTimeout1() {
  document.getElementById("demo").innerHTML = "10";
}
function myTimeout2() {
  document.getElementById("demo").innerHTML = "9";
}
function myTimeout3() {
  document.getElementById("demo").innerHTML = "8";
}
function myTimeout4() {
    document.getElementById("demo").innerHTML = "7";
  }
  function myTimeout5() {
    document.getElementById("demo").innerHTML = "6";
  }
  function myTimeout6() {
    document.getElementById("demo").innerHTML = "5";
  }
  function myTimeout7() {
    document.getElementById("demo").innerHTML = "4";
  }
  function myTimeout8() {
    document.getElementById("demo").innerHTML = "3";
  }
  function myTimeout9() {
    document.getElementById("demo").innerHTML = "2";
  }
  function myTimeout10() {
    document.getElementById("demo").innerHTML = "1";
  }
  function myTimeout11() {
    document.getElementById("demo").innerHTML = "Happy Independence day";
  }

