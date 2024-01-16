function myfun2(){
   console.log("inside myfun2");
   console.log(" your name is");

}
//passing function as parameter to function
function myfun(callmyfun2){
    callmyfun2("Soham");
 
 }
 myfun(myfun2);
