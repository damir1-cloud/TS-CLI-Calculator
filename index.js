#! /usr/bin/env node
import inquirer from "inquirer";
// CLI data input and storage
console.log("Welcome to the Command line calculator made in Typescript");
let inputData = await inquirer.prompt([
    { message: "Enter First number", name: "firstNumber", type: "number" },
    { message: "Enter Second number", name: "Number", type: "number" },
    {
        message: "Select the Operation to Perform",
        name: "operator",
        type: "list",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
        ],
    },
]);
let answer = "The answer is:";
if (inputData.operator === "Addition") {
    console.log(answer += inputData.firstNumber + inputData.Number);
}
else if (inputData.operator === "Subtraction") {
    console.log(answer += inputData.firstNumber - inputData.Number);
}
else if (inputData.operator === "Multiplication") {
    console.log(answer += inputData.firstNumber * inputData.Number);
}
else if (inputData.operator === "Division") {
    console.log(answer += inputData.firstNumber / inputData.Number);
}
else if (inputData.operator === "Modulus") {
    console.log(answer += inputData.firstNumber % inputData.Number);
}
else {
    console.log("Invalid Input");
}
