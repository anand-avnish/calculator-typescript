let input1 = document.getElementById("input1") as HTMLInputElement ;
let input2 = document.getElementById("input2") as HTMLInputElement ;
let output = document.getElementById("output") as HTMLInputElement ;

let sum = document.getElementById("sum") as HTMLElement;
let minus = document.querySelector(".minus") as HTMLElement;
let multiply = document.querySelector(".multiply") as HTMLElement;
let divide = document.querySelector(".divide") as HTMLElement;

// console.log(input1);

sum.addEventListener("click",()=>{
    console.log("In func");
    output.value= String(Number(input1.value)+Number(input2.value));
    // input1.value="";
    // input2.value="";
})

minus.addEventListener("click",()=>{
    console.log("In func");
    output.value= String(Number(input1.value)-Number(input2.value));
    // input1.value="";
    // input2.value="";
})

multiply.addEventListener("click",()=>{
    console.log("In func");
    output.value= String(Number(input1.value)*Number(input2.value));
    // input1.value="";
    // input2.value="";
})

divide.addEventListener("click",()=>{
    console.log("In func");
    output.value= String(Number(input1.value)/Number(input2.value));
    // input1.value="";
    // input2.value="";
})