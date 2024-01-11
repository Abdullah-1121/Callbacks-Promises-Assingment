//                                             T A S K   :   01
// You are creating a basic calculator application. Write a TypeScript function named calculate that 
// takes two numbers and an operation (add, subtract, multiply, or divide)
//  as parameters. Implement a callback function to handle the calculation and display the result.

// making a calculate function
function Calculate (num1:number , num2:number , callback:(number1:number , number2: number)=>void):void{
    //calling callbacks
    callback(num1 , num2);


}
// Callbacks functions ADD , SUBTRACT ,MULTIPLY , DIVIDE
function add(n1:number , n2:number){
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}
function subtract(n1:number , n2:number){
     console.log(`${n1} - ${n2} = ${n1 - n2}`)

}
function multiply(n1:number , n2:number){
    console.log(`${n1} x ${n2} = ${n1 * n2}`)

}
function divide (n1:number , n2:number){
    console.log(`${n1} / ${n2} = ${n1 / n2}`)
}
// Calling the calculate function
Calculate(2,3,multiply);    

//                                             T A S K   :   02
// Imagine you are building a simple quiz app. Create a TypeScript function named fetchQuestion that returns a promise. This 
// promise should resolve with a random quiz question (string). Use the promise to display the question when it's ready.


// Creating Fetchquestion function that returns a promise

function fetchQuestion():Promise<string>{
    
    
    // array of questions
    let questions : string[] =[
        'True or False : Typescript is an opensource language',
        'which function is used to find remainder in typescript',
        'Callback Hell is also called ____________',
        'True or False : Regular enums and const enums are same'
    ]
    let random = Math.floor(Math.random()*questions.length);
    return new Promise((resolve )=>{
         console.log(`Q: ${questions[random]}`);
        resolve(questions[random]);
        
        


    })

}
fetchQuestion();
//                                             T A S K   :   03
// Build a TypeScript function named **`waitAndGreet`** that takes a name (string) as a parameter. This function should 
// use async/await to simulate a delay (e.g., 2 seconds) and then
//  display a greeting with the provided name. Call this function from within an async function and log the result.
async function waitAndGreet(name :string):Promise<void>{
   await  new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Hi ${name}`);
            resolve(name);

        },2000)
    })


}
// calling it  from another async function
async function asyncfunc(){
    await waitAndGreet('Name');
    console.log('I have waited for you')
}
asyncfunc();




