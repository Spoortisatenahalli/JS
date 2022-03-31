

// let a=10;
// let b=11;
// let c=11;

// console.log(( a==b)&&(a==c));


//&& , || , ! // 


// const x=10;
// const d=20;
// const cond1 = d>x;
// const cond2 = x>5;

// console.log(cond1 || cond2)


// const c = 10 <2 ? "hey" : "hello" ;

// console.log(c)  -> Ternary example

//Logic operaton

// or /
// A B C
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 1

// AND &

// A B C
// 0 0 0
// 0 1 0
// 1 0 0
// 1 1 1

// 0 1 0 0

// let ="hour"

// if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }



// 8 4 2 0
  // 1 0 1 0
  // 16 8 4 2 0
  // 1 0  1 0 0   1 0 1 0 
// console.log(a|b);




//  let a=0;
//  let b=1;
//  let c=2;
//  let d="spoo"

//  if (spoo=a){
//      console.log("Saturday");
//  }
//  elseif(spoo=b)
//  {
//      console.log("sat");
//  }
//  else
//  {

//     console.log("fri")
//  }



// Switch case

// switch case

// first type of scenario
// we will compare the value of the variable directly

// let a = 17;

// switch (a){
//     case 10:
//         console.log("Value is 10");
//         break;  //breaks the flow
//     case 15:
//         console.log("Value is 15");
//         break;
//     default:
//         console.log("default case");
//         break;
// }

// switch (a){
//     case a>0:
//         console.log("Positive");
//         break;
//     case a<0:
//         console.log("Negative");
//         break;
//     default:
//         console.log("Zero Value");
//         break;
// }

function abc(){ // function declaration
    console.log('Inside')
}

// to run code we need to execute the function / call the function

abc()  // function execution( function call)

function add(a,b){  // a and b called as parameters 
    return (a+b)
}

var result= add(4,8) // arguments 

console.log(result)  // or  console.log(add(4,1))

// return statement will end the execution.

// var z;

// console.log(z);

// z=10;

// console.log(z);

// Below is a declaring array with array literals

//const arr=[]; // empty array  Java script dono support 2D arra
//console.log("arr" , arr);

// Below is using constructor function

//let anotherarray= new Array(1,2);

//console.log("anotherarray", anotherarray);

let arr=[1,2,3,4,5,6,7,8];
console.log("arr" ,arr);