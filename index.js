"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.greenBright("=========================================================="));
console.log(chalk_1.default.yellow("Welcom to Students management system"));
console.log(chalk_1.default.greenBright("==========================================================")); // this is all student balance
let mybalance = 50000;
// add students details
const addstudent = await inquirer_1.default.prompt([
    {
        name: "Student",
        type: "input",
        message: "Enter Student Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please enter a valid student name";
            }
        },
    },
    {
        name: "age",
        type: "input",
        message: "Enter Student Age",
    },
    {
        name: "gender",
        type: "list",
        message: "Enter Student Gender",
        choices: ["Male", "Female", "other"],
    },
    {
        name: "Expiriance",
        type: "list",
        message: "you have any Expiriance",
        choices: ["I am a begginer",
            "A little bit expriance",
            "I have expiriance",
            "No expiriance"
        ]
    },
]);
//change student name in title case
addstudent.Student =
    addstudent.Student.charAt(0).toUpperCase() +
        addstudent.Student.slice(1).toLowerCase();
console.log(chalk_1.default.greenBright("=========================================================="));
// generate student ID
let studentID = Math.floor(10000 + Math.random() * 9000);
console.log(chalk_1.default.bold.yellowBright(`\nStudent ${addstudent.Student} added with ID ${studentID}\n`));
console.log(chalk_1.default.greenBright("=========================================================="));
//enrolled course
const enrollcourse = await inquirer_1.default.prompt([
    {
        name: "Course",
        type: "list",
        message: "Select courese",
        choices: [
            "Web Development",
            "Aritficial Intelligence",
            "Cloud Computing",
            "Python Programming",
            "Mobile App Development",
        ],
    },
]);
//pay fee
const courseFee = {
    "Web Development": 20000,
    "Aritficial Intelligence": 30000,
    "Cloud Computing": 100000,
    "Python Programming": 45000,
    "Mobile App Development": 50000,
};
console.log(chalk_1.default.greenBright("=========================================================="));
console.log(`\nCourse fee is: ${courseFee[enrollcourse.Course]}-/\n`);
console.log(chalk_1.default.greenBright("=========================================================="));
const payfee = await inquirer_1.default.prompt([
    {
        name: "pay",
        type: "confirm",
        message: "Do you want to pay course fee?",
    },
]);
if (payfee.pay) {
    if (courseFee[enrollcourse.Course] <= mybalance) {
        mybalance = mybalance - courseFee[enrollcourse.Course];
        console.log(`\nYou have Succesfullly Enrolled ${enrollcourse.Course}course\n`);
    }
    else {
        console.log("\nYou don't have enough balance to pay course fee\n");
    }
}
else {
    console.log(`\nEnrollment in ${enrollcourse.Course} cancelled.\n`);
}
// if fee is paid
console.log(chalk_1.default.greenBright("=========================================================="));
if (payfee.pay === true) {
    console.log(chalk_1.default.bgCyanBright.black("\n*****  Your Status  *****\n"));
    console.log("* Student Name: " + addstudent.Student);
    console.log("* Student ID: " + studentID);
    console.log("* Student Gender: " + addstudent.gender);
    console.log("* Student Age: " + addstudent.age);
    console.log("* Student Expiriance: " + addstudent.Expiriance);
    console.log("* Course: " + chalk_1.default.blueBright(enrollcourse.Course));
    console.log("* Balance: " + mybalance);
    // If balance is less than the course fee, display insufficient balance status
}
else {
    console.log(chalk_1.default.greenBright("=========================================================="));
    console.log(chalk_1.default.bgCyanBright.black("\n*****  Your Status  *****\n"));
    console.log("* Student Name: " + addstudent.Student);
    console.log("* Student ID: " + studentID);
    console.log("* Student Gender: " + addstudent.gender);
    console.log("* Student Age: " + addstudent.age);
    console.log("* Student Expiriance: " + addstudent.Expiriance);
    console.log("* courses: you don't have any courses");
    console.log("* Balance: " + mybalance);
}
