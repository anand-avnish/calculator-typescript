var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var output = document.getElementById("output");
var sum = document.getElementById("sum");
var minus = document.querySelector(".minus");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
// console.log(input1);
sum.addEventListener("click", function () {
    console.log("In func");
    output.value = String(Number(input1.value) + Number(input2.value));
    // input1.value="";
    // input2.value="";
});
minus.addEventListener("click", function () {
    console.log("In func");
    output.value = String(Number(input1.value) - Number(input2.value));
    // input1.value="";
    // input2.value="";
});
multiply.addEventListener("click", function () {
    console.log("In func");
    output.value = String(Number(input1.value) * Number(input2.value));
    // input1.value="";
    // input2.value="";
});
divide.addEventListener("click", function () {
    console.log("In func");
    output.value = String(Number(input1.value) / Number(input2.value));
    // input1.value="";
    // input2.value="";
});
