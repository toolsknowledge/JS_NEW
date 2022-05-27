//array
//collection of "indexed" elements called as "array"
//we can create arrays by using "[]"
//index starts from "0"
//we will access elements with "indexes"


let arr1 = [10,20,30,40,50];
console.log( arr1[0], arr1[1], arr1[4], arr1[10], arr1[-1], arr1[1000] );
//10 20 50 undefined undefined undefined


let arr2 = [10,20,30,40,50];
console.log( arr2.length );                     //5
arr2.length = 3;
console.log(arr2);                              //[ 10, 20, 30 ]
console.log(arr2[0],arr2[2],arr2[3]);           //10 30 undefined


let arr3 = [];
console.log(arr3.length);                       //0
arr3[0] = 10;
console.log(arr3.length);                       //1
arr3[100] = 1000;
console.log(arr3.length);                       //101
arr3[1000] = 10000;
console.log(arr3.length);                       //1001



let arr4 = [10,20,30,40,50];
delete arr4[0];                                 
console.log(arr4.length);                       //5
console.log(arr4);                              //[ <1 empty item>, 20, 30, 40, 50 ]
delete arr4[4];
console.log(arr4);                              //[ <1 empty item>, 20, 30, 40, <1 empty item> ]



let arr5 = [20,30,40];
arr5.push(50);
console.log(arr5);                          //[ 20, 30, 40, 50 ]
arr5.unshift(10);
console.log(arr5);                          //[ 10, 20, 30, 40, 50 ]
arr5.pop();
console.log(arr5);                          //[ 10, 20, 30, 40 ]
arr5.shift();
console.log(arr5);                          //[ 20, 30, 40 ]



let arr6 = [10,20,30,40,50,60,70,80,90,100];
arr6.splice(4,3);
console.log(arr6);                      //[10,20,30,40,80,90,100]
arr6.splice(5,1);
console.log(arr6);                      //[ 10, 20, 30, 40, 80, 100 ]
arr6.splice(0,1);
console.log(arr6);                      //[ 20, 30, 40, 80, 100 ]
arr6.splice(4,1);
console.log(arr6);                      //[ 20, 30, 40, 80 ]
arr6.splice(3,0,50,60,70);
console.log(arr6);                      //[ 20, 30, 40, 50, 60, 70, 80 ]
arr6.splice(7,0,90,100);
console.log(arr6);                      //[ 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
arr6.splice(0,0,10);
console.log(arr6);                      //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]




















