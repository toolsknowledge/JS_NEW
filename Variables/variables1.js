//let keyword, used to declare the variables
//let keyword introduced in ES6

/*
    for(let i=0;i<5;i++){
    }
    console.log(i);
    //var : 5  
    //let : ReferenceError: i is not defined 

    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;
    //block
    {
        //local variable
        let data = 200; 
    }
    console.log(data);  
    //var : 200    //let : 100
    //var keyword raised the global polluting issue
    //we can overcome global polluting issue by using let keyword
*/

/*
    let data = 100;
    let data = 200;
    console.log(data);
    //var : 200
    //let : SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate varaiables
    //let keyword won't allows the duplicate variables
*/

/*
    console.log(data);
    let data = 100;
    //var : undefined  (variable hoisting)
    //let : ReferenceError: Cannot access 'data' before initialization
    //variable hoisting raised because of var keyword
    //we can overcome variable hoisting issue by using let keyword
*/

/*
            var                         let
    1) var keyword introduced     let keyword introduced in Es6
       in ES1

    2) var keyword breaks         let keyword obeys the scope rule
       the scope rule

    3) var keyword raised the    let keyword overcomes the global polluting
       global polluting issue    issue

    4) var keyword allows the    let keyword wont allows the duplicate
       duplicate variables       variables

    5) variable hoisting issue   let keyword overcomes the variable hoisting
       raised because of var     issue
       keyword
*/

//const keyword
//ES6
//reinitilization not possible
const data = 100;
//data = 200;
//TypeError: Assignment to constant variable

const var1 = "Angular14";
//var1 = "ReactJS";
console.log(var1);
//TypeError: Assignment to constant variable.


const arr = [10,20,30,40,50];
//arr = [];
//TypeError: Assignment to constant variable.
arr[0] = 100;
arr[1] = 200;
arr[4] = 500;
console.log(arr);       //[ 100, 200, 30, 40, 500 ]















































