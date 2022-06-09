/*
    function func_one(param1){
        console.log( param1() );
    };
    func_one( function func_two(){
        return "Hello";
    } );                //Hello
*/


/*
    function func_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    }
    func_one( function fun_two(){
        return "Hello_1";
    }, function fun_three(){
        return "Hello_2";
    }, function fun_four(){
        return "Hello_3";
    } );
    //Hello_1 Hello_2 Hello_3
*/

/*
    function func_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    }
    func_one(()=>{ return "Hello_1" }, ()=>{ return "Hello_2" }, ()=>{ return "Hello_3" } );
    //Hello_1 Hello_2 Hello_3
*/


/*
    function func_one(param1){
        return param1(10,20,30);
    };

    func_one( (x,y,z)=>{
        console.log(x,y,z);
    } );        //10 20 30
*/

/*
    function func_one(param1,param2,param3){
        return param1("Hello_1")+"...."+param2("Hello_2")+"...."+param3("Hello_3");
    }
    func_one( (x)=>{
        console.log(x);
    }, (y)=>{
        console.log(y);
    }, (z)=>{
        console.log(z);
    } );
*/

/*
    function func_one(param1,param2){
        return param2(param1*10);
    }
    func_one(100,(res)=>{
        console.log(res);
    });         //1000
*/



let add = (num,callback)=>{
    return callback(num+5,false);
};
let sub = (num,callback)=>{
    return callback(num-3,false);
}
let mul = (num,callback)=>{
    return callback(num*2,false);
}
let div = (num,callback)=>{
    return callback(num/2-2,false);
}
add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        })
                    }
                });
            }
        });
    }
});
//callback hell
//promises






























































