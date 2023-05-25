let submit = document.querySelector(".submitbutton");
let variable1 = document.querySelector(".answer1");
let variable2 = document.querySelector(".answer2");
let result1 = document.querySelector(".bannana");

submit.onclick = function() {
  let variable1_value = variable1.value;
  let variable2_value = variable2.value;
  if (variable1_value === "sour" && variable2_value === "crunchy"){
    result1.style.display = "block";
  }
}


let variable5 = document.querySelector(".answer1");
let variable6 = document.querySelector(".answer2");
let result2 = document.querySelector(".cranberry");

submit.onclick = function() {
  let variable5_value = variable5.value;
  let variable6_value = variable6.value;
  if (variable5_value === "sweet" && variable6_value === "soft"){
    result2.style.display = "block";
  }
}

let variable8 = document.querySelector(".answer1");
let variable9 = document.querySelector(".answer2");
let result3 = document.querySelector(".tomato");

submit.onclick = function() {
  let variable8_value = variable8.value;
  let variable9_value = variable9.value;
  if (variable8_value === "sour" && variable9_value === "soft"){
    result3.style.display = "block";
  }
}

let variable11 = document.querySelector(".answer1");
let variable12 = document.querySelector(".answer2");
let result4 = document.querySelector(".pinapple");

submit.onclick = function() {
  let variable11_value = variable11.value;
  let variable12_value = variable12.value;
  if (variable11_value === "sweet" && variable12_value === "crunchy"){
    result4.style.display = "block";
  }
}