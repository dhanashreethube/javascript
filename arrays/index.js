// let arr=[1,2,3,4,5]
// let arr1=arr;
// arr1[0]=20;
// console.log("the value of first array is",arr)
// console.log("the value of second array is",arr1)



// let number1=20;
// let number2=number1;
// number1=100;
// console.log("the value of first number is",number1)
// console.log("the value of second number is",number2)




// let name1="dhanashree";
// let name2=name1;
// name1="omkar";
// console.log("the value of first name is",name1)
// console.log("the value of second name is",name2)



// let obj1={
//     age:27,
//     name:"omkar",
//     education:"B.E",
//     sum:(num1,num2)=>{
//         let result=num1+num2;
//         return result;
//     }
// };

// let obj2=obj1;
// obj2.name="pradeepkumar";
// obj2.age=58;

// console.log(obj1)
// console.log(obj2)
// let total=obj1.sum(2,3);
// console.log("the sum is",total)












//array madhe object:



// let arr=[
//     {name:"rhtdm", year:2000},
//     {name:"bahubhali", year:2016},
//     {name:"taal", year:1999},
//     {name:"spider", year:2001},
// ]



// console.log(arr[1].year)




// let arr=[1,"omkar",25];
// console.log(arr);
// let name=arr[1];
// console.log("the name is",name)
// arr[1]="vimal";
// let newname=arr[1];
// console.log("the name is",newname);






//operations on array:



// const arr = [1,4,50,67,89,99,"bappu",101,106,"omkar","vimal"];
// console.log("the array is",arr)
// console.log(arr.push("dhanu"))
// console.log("The array now is",arr);
// console.log(arr.pop(99));
// console.log(arr.pop());
// console.log("the latest array now is",arr);
// console.log(arr.unshift("thube"));
// console.log("The array now after unshifting is",arr);
// console.log(arr.shift());
// console.log("The array now after shifting is",arr);
// console.log(arr.slice());
// console.log(arr.slice(6,10));
// console.log("The array now after slicing is",arr);
// console.log(arr.indexOf(106));
// console.log("The array now after indexof is",arr);
// console.log(arr.splice(2,0,"bai"));   //add at the second index
// console.log("The array now after splicing is",arr);



//Map method on array:

// const arr = [100,200,500,700,900,1000,1500,2000,2500,3000,4000,3500,4500,5000]

// let answer = arr.map((number)=>{
// if(number%3===0){
//  return number
// }
// })
// console.log("The result is:",answer)    



// const arr = [10,20,30]
// let result = arr.map((value) => {
//   let ans = value*value
//   return ans
// })
// console.log(result)




// const arr = [10,20,30]
// let result = arr.map((value) => {
//   let ans = value+1
//   return ans
// })
// console.log(result)



// const arr = [10,20,30]
//  arr.map((value,index) => {
//   console.log("The elements of array is",arr +" "+ " The index of array elemet is",index)
  
// })




// let arr = [10,20,54,60,75];
// let answer = arr.map((value)=>{
//     if(value%5===0){
//         return true;
//     }
// })

// console.log("The answer is :",answer);


//FILTER METHOD :


// let arr = [10,20,54,60,75];
// let answer = arr.filter((value)=>{
//     if(value%5===0){
//         return value;
//     }
// })

// console.log("The answer is :",answer);




 //let arr = [10,20 ,90,99,"bappu",109,"dhanu",54,"vimal",111,"ora"]

// let result = arr.filter((value)=>{
//     if(typeof(value)==="number"){
//         return value;
//     }
// })

// console.log("result:",result)





// REDUCE METHOD:


// let arr = [10,20 ,90,99,109,54,111,]

// let result = arr.reduce((acc,curr)=>{
    
//   if(curr%2===0)
//        {
//         return curr+acc
//        }
//     }
   
// ,0)

// console.log("result:",result)




// let arr = [10,20,30,40];

// let result = arr.reduce((curr,acc) => {

// return acc+curr;

// },0)
// console.log("result:",result)



//ARRAYS WITH FUNCTIONS:


// let arr = [10,20 ,90,99,"bappu",109,"dhanu",54,"vimal",111,"ora"]

// function togetstring(arr){
//    let ans=  arr.filter((value)=>{
//         if(typeof(value)==="string"){
//             return value;
//         }
//     })

//     return ans
// }


// let result = togetstring(arr);
// console.log("result:",result)




let arr = [10,20,33,45,50]


function even (arr ){
    let sum = 0
    for(let i =0;i<arr.length;i++){
        //let sum = 0
        if(arr[i]%2===0 ){
            sum = sum + arr[i]

        }
    }
    return sum
}

let ans = even (arr )
console.log("answer is:",ans)

// function even(arr){
//     let result = arr.reduce((acc,curr) =>{
//         // let sum = 0
//         if(curr%2===0){
//            acc = acc+curr
//         }
//     },0)
//     return result
    
// }

// let result = even(arr)
// console.log("result:",result)