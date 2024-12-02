import inquirer from "inquirer";
console.log("Welcome to Management Department");
class Students {
    Name;
    Age;
    Id;
    Course;
    Fee;
    constructor(name, age, id, course, fee) {
        this.Name = name;
        this.Age = age;
        this.Id = id;
        this.Course = course;
        this.Fee = fee;
    }
}
let information = new Students(await inquirer.prompt([{
        message: "Enter your name",
        type: "string"
    }]));
if () { }
