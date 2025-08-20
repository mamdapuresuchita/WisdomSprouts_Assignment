//1.Practice let

let color = "black";
console.log("color1:",color);

color = "white";
console.log("color2:",color);


//2.Test var scope

if (true) {
    var animal = "dog"; 
    console.log("Inside_if_block:", animal);
}

console.log("Outside_if_block:", animal);

//3.Const array

const fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits);

fruits[fruits.length] = "grapes"; 
console.log("Add using length property:", fruits);

fruits.push("orange");
console.log("Add using push method:", fruits);
console.log("A const array means you cannot reassign the variable, but you can modify its contents (add, remove, update elements).");


fruits = ["grapes", "pineapple"]; 
console.log("After reassignment:", fruits);
console.log("A const array means you cannot reassign the variable, but you can modify its contents (add, remove, update elements).");