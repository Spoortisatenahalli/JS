function f1(){
    console.log('Normal  defination');
}
f1();

var f2= function(){
    console.log('Anamolyus function/ by defining the function with variables');
}
f2();

var f3= ()=>{
    console.log('Arrow function');
}
f3();

var f5 = (a,b) => {
   return a + b
}
console.log(f5(4 , 4));


//var f5 = (a,b) => a + b // implicit return statement

var x=10
function add(){
    var x=20
    console.log(x);
}


function multiply(n){
    return n*2;
}
multiply(4);

var x= (n) => n*2;
console.log(x(5));



var z=30;
function abc(){
    var z=20;
    console.log(z);
}
abc();


//....... Arrays

var a=[1,2,3,4]
console.log(a)

var z=[1, 'spoorti' , 'sp', 2]
console.log(z);
console.log(z[5]);
console.log(z.length); // to get length of array.