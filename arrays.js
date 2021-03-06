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


let arr7 = [1,2,3,4,5];
console.log(
    arr7.map((element,index)=>{
        return element*100
    })
);
//[ 100, 200, 300, 400, 500 ]


let arr8 = [100,200,300,400,500];
console.log(
    arr8.map((element,index)=>{
        return element/100;
    })
);
//[ 1, 2, 3, 4, 5 ]

let arr9 = [1,2,3,4,5];
console.log(
    arr9.map((element,index)=>{
        return [element];
    })
);
//[[1],[2],[3],[4],[5]]

let arr10 = [1,2,3,4,5];
let arr11 = ["one","two","three","four","five"];
console.log(
    arr10.map((element,index)=>{
        return [element,arr11[index]]
    })
);
//[[1,"one"], [2,"two"], [3,"three"],[4,"four"],[5,"five"]]


let arr12 = [100,200,300,400,500];
console.log(
    arr12.filter((element,index)=>{
        return element>=300;
    })
);
//[ 300, 400, 500 ]

let arr13 = [1,2,3,4,5];
console.log(
    arr13.filter((element,index)=>{
        return element<=2;
    })
);
//[ 1, 2 ]

let arr14 = [1,2,3,4,5];
console.log(
    arr14.map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=300;
    })
);
//[ 100, 200, 300 ]


let arr15 = [1,2,3,4,5];
console.log(
    arr15.reduce((firstElement,nextElment)=>{
        return firstElement+nextElment;
    })
);
//15


let arr16 = [1,2,3,4,5];
console.log(
    arr16.map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=500;
    }).reduce((firstElement,nextElment)=>{
        return firstElement+nextElment;
    })
);
//1500


let arr17 = ["ReactJS","to","Welcome"];
console.log(
    arr17.reduceRight((firstElement,nextElment)=>{
        return firstElement+" "+nextElment;
    })
);          //Welcome to ReactJS



let arr18 = [[1],[2],[3]];
console.log(
    arr18.flat(1)
);
//[ 1, 2, 3 ]


let arr19 = [[1,2],[3,4],[5,6]];
console.log(
    arr19.flat(1).reduce((firstElement,nextElment)=>{
        return firstElement+nextElment;
    })
);
//21

let arr20 = [[[[[[[[[[[1]]]]]]]]]],[[[[[[[[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]]]]]]]]];
console.log( arr20.flat(Infinity) );
//[ 1, 2 ]


let arr21 = [1,2,3,4,5];
let arr22 = ["one","two","three","four","five"];
//[[1,"one"],[2,"two"],[3,"three"],[4,"four"],[5,"five"]]
//[1,"one",2,"two",3,"three",4,"four",5,"five"]
console.log(
    arr21.flatMap((element,index)=>{
        return [element,arr22[index]]
    })
);


let arr23 = [1,2,3,1,2,3];
arr23.forEach((element,index)=>{
    console.log( arr23.indexOf(element) );
});
//0 1 2 0 1 2

let arr24 = ["Hello","Welcome","Hello","Welcome","Hi"];
arr24.forEach((element,index)=>{
    console.log( arr24.indexOf(element) );
});
//0 1 0 1 4


let arr25 = [10,20,30,10,20,30,40];
console.log(
    arr25.filter((element,index)=>{
        return arr25.indexOf(element) == index;
    })
);
//[ 10, 20, 30, 40 ]


//sort
//ascending / decending
let arr26 = [1,5,2,4,3];
console.log(
    arr26.sort((num1,num2)=>{
        return num1-num2
    })
);
//[ 1, 2, 3, 4, 5 ]

console.log(
    arr26.sort((num1,num2)=>{
        return num2-num1;
    })
);
//[ 5, 4, 3, 2, 1 ]


let arr27 = [10,50,20,40,30];
//2nd max ---- 40
//2nd min ---- 20
console.log(
    arr27.sort((num1,num2)=>{
        return num2-num1;
    })[1]
);   //40
console.log(
    arr27.sort((num1,num2)=>{
        return num1-num2;
    })[1]
);  //20


let arr28 = [1,2,3,4,5];
//some()
console.log(
    arr28.some((element,index)=>{
        return element<=1;
    })
);
//true


let arr29 = [10,20,30,40,50];
console.log(
    arr29.some((element,index)=>{
        return element<10;
    })
);
//false


//every()
let arr30 = [10,20,30,40,50];
console.log(
    arr30.every((element,index)=>{  
        return element<=50;
    })
);
//true

let arr31 = [10,20,30,40,50];
console.log(
    arr31.every((element,index)=>{
        return element<50;
    })
);
//false


let arr32 = [10,20,30,40,50];
console.log(
    arr32.find((element,index)=>{
        return element == 30;
    })
); 
//30
console.log(
    arr32.find((element,index)=>{
        return element == 100;
    })
);
//undefined

let arr33 = [10,20,30,40,50];
console.log(
    arr33.includes(20)
);
//true
console.log(
    arr33.includes(200)
);
//false
let arr34 = [10,20,30,40,50];
console.log(
    arr34.findIndex((element,index)=>{
        return element == 20;
    })
);
//1
console.log(
    arr34.findIndex((element,index)=>{
        return element == 50;
    })
);
//4
console.log(
    arr34.findIndex((element,index)=>{
        return element == 100;
    })
);
//-1

let arr35 = [10,20,30,40,50];
arr35.splice(arr35.findIndex((element,index)=>{
    return element == 30;
}),1);
console.log(arr35);
//[ 10, 20, 40, 50 ]


let arr36 = [10,100,1000,10000,20,200,2000,20000];
arr36.splice(arr36.findIndex((element,index)=>{
    return element == 10000;
}),1);
console.log(arr36);


//forEach()
let arr37 = [1,2,3,4,5];
arr37.forEach((element,index)=>{
    console.log(element);
});


//for....of()
let arr38 = [10,20,30,40,50];
for(let x of arr38){
    console.log(x);
}

//9030001847

//for.....in
let obj = {
    "key1":"Hello_1",
    "key2":"Hello_2",
    "key3":"Hello_3"
};
for(let x in obj){
    console.log(x);
    console.log(obj[x]);
}


//reverse()
//it is used to reverse the array elements
let arr39 = [10,20,30,40,50];
console.log(
    arr39.reverse()
);
//[ 50, 40, 30, 20, 10 ]

let arr40 = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
console.log(
    arr40.reverse()
);
//[ 'Hello_5', 'Hello_4', 'Hello_3', 'Hello_2', 'Hello_1' ]


let str = "hello";
//console.log( str.reverse() );
//TypeError: str.reverse is not a function
console.log(
    Array.from(str).reverse().toString().replaceAll(",","")
);
// 1) str ===> array                [ 'h', 'e', 'l', 'l', 'o' ]
// 2) reverse()                     [ 'o', 'l', 'l', 'e', 'h' ]
// 3) array ===> string             o,l,l,e,h
// 4) replace all commas            olleh


let str1 = "welcome";
console.log(
    Array.from(str1).reverse().toString().replace(/,/g, "")
);
//emoclew

let str2 = "Welcome to JavaScript";
console.log(
    Array.from(str2).reverse().join("")
);
//tpircSavaJ ot emocleW


let str3 = "ReactJS";
console.log(
    Array.from(str3).reverse().join("")
);
//SJtcaeR


let arr41 = ["Angular14","ReactJS","VueJS","NodeJS","MongoDB"];
//["MongoDB","NodeJS","VueJS","ReactJS","Angular14"]
//["41ralugnA","SJtcaeR","SJeuV","SJedoN","BDognoM"]
//["BDognoM","SJedoN","SJeuV","SJtcaeR","41ralugnA"]



let arr42 = [10,20,30,40,50];
console.log(arr42.slice(2,4));      //[ 30, 40 ]
console.log(arr42.slice(0,1));      //[ 10 ]
console.log(arr42.slice(1,2));      //[ 20 ]
console.log(arr42.slice(2,3));      //[ 30 ]
console.log(arr42.slice(3,4));      //[ 40 ]
console.log(arr42.slice(4));        //[ 50 ]


let arr43 = [1,2,3,4,5,6,7,8,9,10];
//[6,7,8,9,10,1,2,3,4,5]
let second_half = arr43.slice(5);
let first_half = arr43.slice(0,5);
console.log( second_half.concat(first_half) );
console.log( [...second_half,...first_half] );


let p1 = "Hello";
console.log( p1.padStart(10,"*") );     //*****Hello

let p2 = "Hello";
console.log( p2.padEnd(15,"*") );       //Hello**********


let p3 = "Hello";
console.log(p3.padStart(10,"#").padEnd(15,"#"));
//#####Hello#####


let t1=" Hello ";
console.log(t1.length);             //7
console.log(t1.trim().length);      //5
console.log(t1.trimStart().length); //6
console.log(t1.trimEnd().length);   //6


let s1 = "Welcome to JavaScript";
console.log(s1.substring(0,7));         //Welcome
console.log(s1.substring(8,10));        //to
console.log(s1.substring(11));          //JavaScript


let s2 = "welcome to reactjs";
console.log(s2.substr(0,7));            //welcome
console.log(s2.substr(8,2));            //to
console.log(s2.substr(11,7));           //reactjs



let arr44 = [10,20,30,40,50,60,70,80,90,100];
arr44.copyWithin(3);
console.log(arr44);
//[10,20,30,10,20,30,40,50,60,70]


let arr45 = [10,20,30,40,50,60,70,80,90,100];
arr45.copyWithin(5);
console.log(arr45);
//[10, 20, 30, 40, 50,10, 20, 30, 40, 50]


let arr46 = [10,20,30,40,50,60,70,80,90,100];
arr46.copyWithin(2,5);
console.log(arr46);
//[10,  20, 60, 70,  80, 90, 100, 80, 90, 100]


let arr47 = [10,20,30,40,50,60,70,80,90,100];
arr47.copyWithin(3,7);
console.log(arr47);
//[10,20,30,80,90,100,70,80,90,100]

let arr48 = [10,20,30,40,50,60,70,80,90,100];
arr48.copyWithin(2,4,7);
console.log(arr48);
//[10, 20, 50, 60,  70, 60, 70, 80, 90, 100]


let arr49 = [10,20,30,40,50,60,70,80,90,100];
arr49.copyWithin(1,4,8);
console.log(arr49);
//[10,50,60,70,80,60,70,80,90,100]


let arr50 = [1,2,3,4,5];
console.log( arr50.fill(100) ); //[ 100, 100, 100, 100, 100 ]
console.log( arr50.fill(200,1));//[ 100, 200, 200, 200, 200 ]
console.log( arr50.fill(300,2,3)); //[ 100, 200, 300, 200, 200 ]
console.log( arr50.fill(400,3,4));//[ 100, 200, 300, 400, 200 ]
console.log( arr50.fill(500,4)); //[ 100, 200, 300, 400, 500 ]


console.log( "Hello".repeat(5) );
//HelloHelloHelloHelloHello

let split_str = "welcome to javascript";
console.log( split_str.split(" ") );
//[ 'welcome', 'to', 'javascript' ]


let split_str1 = "welcome";
console.log( split_str1.split("") );


let arr51 = [10,20,30,10,20,10,20];
console.log( arr51.lastIndexOf(10) ); //5
console.log( arr51.lastIndexOf(20) ); //6















































































































































































