/*
    promises are "special" javascript objects

    promises are solution for "callback hell"

    "producer" will create the "promises"

    "consumer" will consume the "promises"

    "Promise" is the class, used to create the "promises"

    we can consume Promises in 2 ways

    1) then()

    2) async & await keywords
*/
/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("welcome to promises");
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/



/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },5000);
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },5000);
    });
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_2");
        },10000);
    });
    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_3");
        },15000);
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    promise3.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },0);
    });

    let promise2 = new Promise((resolve,reject)=>{
        resolve("Hello_2");
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


let promise1 = new Promise((resolve,reject)=>{
    resolve("Hello_1");
});

let promise2 = new Promise((resolve,reject)=>{
    resolve("Hello_2");
});

let promise3 = new Promise((resolve,reject)=>{
    resolve("Hello_3");
});


/*
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise3.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

/*
    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //[ 'Hello_1', 'Hello_2', 'Hello_3' ]
*/

Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
//Hello_1















































































