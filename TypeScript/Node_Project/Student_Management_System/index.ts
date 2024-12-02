import inquirer from "inquirer";

console.log("Welcome to Management Department");

class Students {
  Name: string;
  Age: number;
  Id: number;
  Course: string;
  Fee: number;
  constructor(name:string,age:number,id:number,course:string,fee:number){
    this.Name =name ;
    this.Age = age;
    this.Id = id ;
    this.Course = course ;
    this.Fee = fee
  }
}
let id:number =10000;
let studentname:string = "";
let feeamount:number = 2500