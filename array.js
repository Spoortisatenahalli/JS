
// Topics covered.

// 1] Array -> 6- 67
//2] String -> 70-

//3] Seitch Statememnts

// Array Defination -->  which is used to store any data type. Data storage area any tyoe of data value can be stored.

// Below is a declaring array with array literals

//const arr=[]; // empty array  Java script dono support 2D arra
//console.log("arr" , arr);

// Below is using constructor function

//let anotherarray= new Array(1,2);

//console.log("anotherarray", anotherarray);


let arr=[1,2,3,"orange",5,"spoorti",7,8, {id:1, name:"Spoort"}];
console.log("arr" ,arr);
 console.log(arr[1]); // Output will be 2 as it's index vale is 0.

 console.log(arr[5]);

 //... Following are the array Menthods.

 // Import Push ,pop , Shift and unshift

 // push -> Add elemts to the end of the array and returns the new length of the array.

 let values=["a" , "e" ,"i","o","u"];
 console.log(values);
 
 values.push(1); // Push will insert the values at the end of the array
 console.log(values);

 var z=[1,2,3,4,5,6]
  // Will remove the last value of the array
 console.log(z);

 //let a= pop.z()

 //console.log(a);
 console.log(z);


 values.shift(); // removes the 1st element from array
 console.log(values);

 values.unshift("a"); // We can add the removed elements
 console.log(values);

 // To get the length of the array.
 console.log(values.length);

 values [10]= 12; // In this case it will show as empty if we access the element which is empty it will refer as "undefined"
 console.log(values);

 console.log(values[10]); // We can assign the 10th index value by callig it.

 //function to find the how many string or number present in array


 function countstring(arr){
     let count=0;
     for (let i=0; i<arr.length; i++)
     {
         const element= arr[i];
         if (typeof(element)=="number")
         count++;
     }
     return count;
 }

 const result=countstring(values);
 console.log(result);



 // Strings are immutable In JS -> Means we cannot chnege content of the string.

//  let str='abc'
//   str.push(z);
//   console.log(str);

//concatination of strings [+, concat]

let name1=  "Vijay prathap singh"
let age = 22

let statement= name1+ " is " + age + " years old"

console.log(statement)

// Using concat

let newsstar= name1.concat(" ",age)
console.log(newsstar)


// String methods
//------indexof

str = 'widget with id'


console.log(str . indexOf('id')); //1
console.log(str. indexOf('Widget')); //-1 Beacause w is small and give input is W hence it will not find the record.

console.log(str . indexOf('t' , 3)); // 1 it will start searching 3=t from 3rd place.

//---includes() -> return Boolean value

//let str= "widget"


// -------> slice()

let abc=" Stringify"

console.log(abc . slice(0 ,5));  // it will fetch the data btwn 0-5 index

//console.log(abc , slice(-4 , -1)); // reads from last


// --------> substring()

let x= "Spoorti"

console.log( x .substring(2, 4)) //
// Substring will not work for negative index


// Split : this menthod converts your string to an array

let greeting= 'Hi How are you'

//let z= greeting.split(" ")
//console.log(z)


console.log(z .join('-'))


// join works on array split on strings


// replace() , replaceAll()

const temp = " Spoorti is hard working. Spoorti is brainy"
 
console.log(temp.replace('Spoorti' , 'Spoo')) // replaces only 1st occurence

console.log(temp .replaceAll('Spoorti' , 'Spoo')) // Replace all occurence 



// trim  -> Only removes end and initial unnessary spaces





let C=100;

switch(C){
    case 10:
    console.log("Please be carefull");
    break; // Break staements breks the answers useses only correct answers else it will give all the answers.
    case 200:
        console.log(" Lets have fun");
        break;
    default:
        console.log("Areee FIne");
}

// In switch statement whenever we are using variable comparision inside switch statement we will use switch(true) else we will use switch(a)

//Example

switch(true){
    case C>0:
        console.log("I am positive");
        break;
        case  C<0:
            console.log("I am negative");
       case C==0:
           console.log("Im fine");
}



//fOR LOOPS

let i=0;
for(; i<10;i++){
    console.log("value of i is " ,i);
}



// Some continuation of array methods.

//......1] includes() --> Which gives bollean values

let xx=['banana', 'orange','jack']
console.log(xx.includes('kiwi'));

//2] lastindexof()-->which will give the lastindex of perticular element

console.log(xx.lastIndexOf('orange'));

// 3]findindexof()

//4] concat

let k=['a' ,'b','c']

let r=['s','d']

let s=k.concat(r)

console.log(s);

// 5] tostring -> Converts array to string

// let l=['a' ,'b','c']
// let f=l.toString()
// console.log(f);

// 6] join menthod

// let l=['a' ,'b','c']
// let f=l.join('*')
// console.log(f);


// 7] Some -> it returns true if atlest one element condition statifies the condition

// 8] every -> it returns true if every  element condition statifies the condition

// let l=['a' ,'b','c']

// let p= l.every (element => element %2==0);

// console.log(p);

//9] filter-> returns the new array which satisifies the given condition.

// let n= [1,2,3,4,5,6,7,8]
// let o=n.filter(element=>element % 2 !==0);
// console.log(o);

// 10 map -> returns new array populated with the result of call back function.


// let n=[1,2,3,4,5]
// console.log(n);

// let o= n.map(element=> element+5);
// console.log(o);

// let n=[1,2,3,4,5]
// console.log(n);
// //let z =[ ];
// function add5(n) {
//     for(let i=0;i<n.length;i++){
//          return(n[i]+5);
//     }
// }

// add5();

// 11 -> executes the provided function once in every element in a array

// 12 -> reduce -> reduce function reduces the array into single element
// reduce function takes 2 argumets i.e call back and initial value of accumalotor
// Call back takes 2 vales i.e accumalotor and current value

let xd=[1,2,3,4,5]
let initialvalue=0;
let res= xd.reduce(function (accumalotor, current){
 accumalotor=accumalotor+current;
 return accumalotor
} ,initialvalue)

console.log(res);


let salary=[100,200,300,400,500,600]

let rw= salary.filter(item=>item>300)

console.log(rw);

for(let i=0;i<rw.length;i++){
    rw=rw[i]+rw[i]
}

console.log(rw);