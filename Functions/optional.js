/*
    function fun_one(param1?:string,param2?:string,param3?:string):void{
        console.log(param1,param2,param3);
    }
    fun_one();                                  //undefined undefined undefined
    fun_one("Hello_1");                         //Hello_1 undefined undefined
    fun_one("Hello_1","Hello_2","Hello_3");     //Hello_1 Hello_2 Hello_3
    fun_one(undefined,"Hello_2");               //undefined Hello_2 undefined
    fun_one(null,"Hello_2");                    //null Hello_2 undefined
*/
function fun_one(param1, param2, param3) {
    if (param2 === void 0) { param2 = "Hello_2"; }
    var param4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        param4[_i - 3] = arguments[_i];
    }
    console.log(param1, param2, param3, param4);
}
;
//fun_one();                                            //Expected at least 1 arguments, but got 0.
fun_one("Hello_1"); //Hello_1 Hello_2 undefined []
fun_one("Hello_1", undefined, "Hello_3", "Hello_4"); //
