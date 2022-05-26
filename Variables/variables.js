//variables
//variables are used to "store" the data
//Ex. string, number, boolean, arrays, objects,.......
//we will define variables by using var, let or const keywords
//let and const keywords introduced in ES6
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables should not start with digits
//javascript supports following datatypes
//1) string         2) number       3) boolean 
//4) undefined      5) null         6) bigint
//7) Symbol
/*
    Syntax
    ******
    var/let/const variablename = value;
*/

//string
//collection of "characters" called as "string"
//we will represent the string in "3" ways
//""(double quotes),   ''(single quotes) and ``(backtick)
//``(backtick) introduced in "ES6"
//``(backtick) operator technically called as "template" literal
//``(backtick) operator used to create "paragraphs" in "javascript" environment
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one} <==> ${sub_two} <==> ${sub_three}`;
console.log(mern_stack);
//ReactJS <==> NodeJS <==> MongoDB


var table_name = "employees";
var sal = 50000;
var sql_query1 = `select * from ${table_name} where esal>${sal}`;
console.log(sql_query1);
//select * from employees where esal>50000


var username = "admin";
var password="admin123";
var sql_query2 = `select * from ${table_name} where uname='${username}' and upwd='${password}'`;
console.log(sql_query2);
//select * from employees where uname='admin' and upwd='admin123'


//number
//decimal
//double
//hexadecimal
//octal
//binary
var decimal_number = 100;
var double_number = 100.12345;
var hexadecimal_number = 0x123ABC;
var octal_number = 0o123;
var binary_number = 0b101010;
console.log( decimal_number, 
             double_number,
             hexadecimal_number,
             octal_number,
             binary_number);
//100 100.12345 1194684 83 42



//boolean
//true   ----  1
//false  ----  0
var flag1 = true;
var flag2 = false;
console.log(flag1);         //true
console.log(flag2);         //false
flag1?console.log("Hello"):console.log("Bye");          //Hello
flag2?console.log("Hello"):console.log("Bye");          //Bye



//undefined
var employee;
console.log(employee);                  //undefined


employee = null;
console.log(employee);                  //null


//typeof 
//typeof operator, used to know the datatype
console.log(typeof "Hello");                    //string
console.log(typeof 100);                        //number
console.log(typeof true);                       //boolean
console.log(typeof undefined);                  //undefined
console.log(typeof null);                       //object



































