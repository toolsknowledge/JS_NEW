//let
//let keyword introduced in ES6
//let keyword used to declare the variables

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
    let data = 100;
    let data = 200;
    console.log(data);
    //var : 200
    //let : SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/

/*
    //1) declare the variable
    //2) initilize the value
    //3) print the variable
    console.log(data);
    let data = 100;
    //var : undefined
    //let : ReferenceError: Cannot access 'data' before initialization
    //variable hoisting raised because of var keyword
    //we can overcome variable hoisting with let keyword
*/



/*
    let data = "Hello_1";

    {
        let data = "Hello_2"; 
    }


    console.log(data); 

    //var : Hello_2
    //let : Hello_1

    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using let keyword
*/


/*
                    var                             let

    var keyword introduced in               let keyword introduced in 
    ES1                                     ES6

    scope rule break by                     scope rule obey by let
    var keyword                             keyword

    global polluting issue                  we can overcome global polluting 
    raised by var keyword                   issue by using let keyword

    duplicate variables allowed             let keyword won't allows the duplicate
    by var keyword                          variables

    variable hoisting issue raised          we can overcome variable hoisting issue
    by var keyword                          by using let keyword
*/

//const
//ES6
//reinitilization not possible
const data = "React";
//data = "Angular";
//TypeError: Assignment to constant variable.

const arr = [10,20,30,40,50];
//arr = [];      //TypeError: Assignment to constant variable.
arr[0] = 100;
arr[1] = 200;
arr[4] = 500;
console.log(arr);           //[ 100, 200, 30, 40, 500 ]


const obj = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};
// obj = {};
//TypeError: Assignment to constant variable.
obj.key1 = "Welcome_1";
obj.key2 = "Welcome_2";
obj.key3 = "Welcome_3";
console.log(obj);
//{ key1: 'Welcome_1', key2: 'Welcome_2', key3: 'Welcome_3' }





//bigint
// >2^53 - 1
//suffix with "n"
var num1 = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(num1);


//Symbol
var x = Symbol("Hello");



//typeof
console.log( typeof 100n );                 //bigint
console.log( typeof x );                    //symbol
console.log( typeof [] );                   //object
console.log( typeof null );                 //object
console.log( typeof {} );                   //object


// &  and               if both are true, then result is true
// |  or                if atleat one is true then result is true
// ^  XoR               if both are opposite then result is true
console.log( 1 & 1 );           //1
console.log( 1 & 0 );           //0
console.log( 0 & 1 );           //0
console.log( 0 & 0 );           //0

console.log( 1 | 1 );           //1
console.log( 1 | 0 );           //1
console.log( 0 | 1 );           //1
console.log( 0 | 0 );           //0

console.log( 1 ^ 1 );           //0
console.log( 1 ^ 0 );           //1
console.log( 0 ^ 1 );           //1
console.log( 0 ^ 0 );           //0




































































































