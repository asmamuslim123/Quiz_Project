#! /usr/bin/env node 
import inquirer from "inquirer";
const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
         {
        type: "list",
        name: "question_1",
        message: "Q1.What is TypeScript?",
        choices: [
                { name: "A) A type of JavaScript framework", value: "A) A type of JavaScript framework"},
                { name:  "B) A strongly typed superset of JavaScript", value:  "B) A strongly typed superset of JavaScript" },
                { name: "C) A version of HTML", value: "C) A version of HTML" },
                { name: "D) A type of database", value: "D) A type of database" }
                ]
        },
        {
        type: "list",
        name: "question_2",
        message: "Q2.Which company developed TypeScript?",
        choices: [
                { name:"A) Google", value: "A) Google"},
                { name:  "B) Microsoft", value:  "B) Microsoft" },
                { name:  "C) Adobe", value:  "C) Adobe" },
                { name:  "D) Amazon", value:  "D) Amazon" }
                ]
        },
        {
        type: "list",
        name: "question_3",
        message: "Q3.Which of the following is a key feature of TypeScript?",
        choices: [
                { name:"A) Static typing", value: "A) Static typing"},
                { name:  "B) Dynamic typing", value:  "B) Dynamic typing" },
                { name:  "C) Weak typing", value:  "C) Weak typing" },
                { name:  "D) Type checking", value:  "D) Type checking" }
                ]
       },
       {
        type: "list",
        name: "question_4",
        message: "Q4.Can TypeScript code be directly executed by browsers?",
        choices: [
            { name: "A) Yes", value: "A) Yes"},
            { name:  "B) No", value:  "B) No" },
            { name:  "C) Sometimes", value:  "C) Sometimes" },
            { name:  "D) Only in specific browsers", value:  "D) Only in specific browsers" }
                ]
        },
        {
        type: "list",
        name: "question_5",
        message: "Q5.What is the file extension for TypeScript files?",
        choices: [
            { name: "A) .js", value: "A) .js"},
            { name:  "B) .ts", value:  "B) .ts" },
            { name:  "C) .jsx", value:  "C) .jsx" },
            { name:  "D) .tsx", value:  "D) .tsx" }
                ]
        }
    ]);
    let score: number = 0;

switch(quiz.question_1){
    case "B) A strongly typed superset of JavaScript":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. incorrect!");
}
switch(quiz.question_2){
    case "B) Microsoft":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. incorrect!");
}
switch(quiz.question_3){
    case "A) Static typing":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. incorrect!");
}
switch(quiz.question_4){
    case "A) Yes":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. incorrect!");
}
switch(quiz.question_5){
    case "B) .ts":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. incorrect!");
}

console.log(`Your score is: ${score}`);