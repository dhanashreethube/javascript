// function myname(){
//     console.log("my name is ora !!")
// }

// myname()


//Q write function that prints countiong from 1 to 100

// function printCounting(num){
//     for(let i=0;i<num;i++){
//         console.log(i)
//     }
// }


// printCounting(2)



// Q FIND AVERAGE OF NUMBERS

// function findAvg(num1,num2){
//    let Average=(num1+num2)/2
//     console.log("The average is",Average )
// }




// function findaverage(arr){
//     let total=0
//     for(let i=0;i<arr.length;i++){
//         total=total+arr[i]
//     }
//     return total
// }

// const arr=[1,5,7,8,9,10,32]
// let answer=findaverage(arr)
// console.log("the result is",answer)





//return functions

// function sumofnumber(...arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }

// const arr=[76,23,65,80]
// let result= sumofnumber(arr)
// console.log("the result is",result)





// function sum(num1,num2,num3){
//     let sum=num1+num2+num3
//     return sum
// }

// let result=sum(10,20,30)
// console.log("the result is",result)



// function myname(firstname,lastname){
//     let fullname=firstname+" "+lastname
//     return fullname 
// }


// let result=myname("omkar" , "thube")
// console.log("the fullname is",result)


// const myname=(firstname,lastname)=>{
//     let fullname=firstname+" "+lastname
//     return fullname
// }


// let result=myname("omkar" , "thube")
// console.log("the fullname is",result)



//3 ways of function declarartion
//first way normal function

// function getMultiplication(num1,num2){
//     let result=num1*num2
//     return result
// }

// let answer=getMultiplication(5,5)
// console.log("the answer is",answer)

//second way function expression


// const getMultiplication= function (num1,num2){
//     let result=num1*num2
//     return result
// }

// let answer=getMultiplication(10,10)
// console.log("the answer is",answer)



// 3 way arrow function

// const getMultiplication=  (num1,num2)=>{
//     let result=num1*num2
//     return result
// }

// let answer=getMultiplication(5,6)
// console.log("the answer is",answer)




const getexponential= (num1,num2) => {
    let result=num1**num2;
    return result
}
let answer = getexponential(5,2);
console.log("The result of a exponential b is" ,answer)
