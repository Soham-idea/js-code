//Example
//LexicalScope
const value = "value1";
function fun1(){

    function fun2 (){
 
        console.log(value);
    }
    console.log(value);
   fun2();
}
fun1(); 