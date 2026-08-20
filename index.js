// // console.log("Hello, World!");
// // let a=23;


// // if(a>10){
// //     let a=15;
// //     console.log("The value of a is greater than 10, so we changed it to: " + a);
// // }
// // console.log("The final value of a is: " + a);
// // function sum(){
// //     return 20 + 20;
// // };

// // function sumofsum(){
// // console.log(sum()+sum());
// // }

// // sumofsum();

// // function info(roll, name, college, branch) {
// //     return "Roll: " + roll +
// //            " Name: " + name +
// //            " College: " + college +
// //            " Branch: " + branch;
// // }

// // function myinfo() {
// //     console.log(info(
// //         202501030009,
// //         "Yash Kumar",
// //         "ABES Engineering College",
// //         "CSE"
// //     ));
// // }

// // function myfriendinfo() {
// // console.log(info(
// //     202501030010,
// //     "Pappu",
// //     "ABES Engineering College",
// //     "CSE"
// // ));
// // }




// // myinfo();
// // myfriendinfo();


// // function generateRandomNumber() {
// //     return Math.floor(Math.random() * 1000) ;

// // } 
// // const randomNumber = generateRandomNumber();
// // console.log("Random Number: " + randomNumber);

// // function checkEvenOdd(number) {
// // if (randomNumber % 2 === 0) {
// //     console.log(" even");
// // } else {
// //     console.log(" odd");
// // }
// // } 

// // checkEvenOdd(randomNumber);



// // const sum=(a,b)=>{
// //     return a+b;
// // }
// // console.log(sum(3,3));

// // (()=>{ console.log("Hello, World!"); })();


// // function sum(a, b) {
// //     return a + b;
// // }

// // function suminMsg(sum, msg) {
// //     const result = sum(10, 20);
// //     return msg + result;
// // }

// // console.log(suminMsg(sum, "The sum of 10 and 20 is: "));


// // function login(msg,error){
// //     if(error){
// //         console.log("Error: " + error);

// // }
// // else{
// //     console.log("Success: " + msg);
// // }
// // }

// // function loginUser(username, password, callback){
    
// //         if(username==="Yash" && password==="12345"){
// //             callback("Login Successful", null);
// //         }
// //         else{
// //             callback(null, "Invalid username or password");
// //         }         
// //     }

// //     loginUser("Yash", "12345", login);

//     // setTimeout(()=>(console.log("Hello")),3000);

//     setTimeout(() => {
//         console.log("one");
    
//         setTimeout(() => {
//             console.log("two");
    
//             setTimeout(() => {
//                 console.log("three");
    
//                 setTimeout(() => {
//                     console.log("four");
    
//                     setTimeout(() => {
//                         console.log("five");
    
//                         setTimeout(() => {
//                             console.log("six");

//                           setTimeout(()=> {

//                             console.log("seven");

//                             setTimeout(()=> {
//                                console.log("eight"); 
//                           })
//                         }, 1000);
    
//                     }, 1000);
    
//                 }, 1000);
    
//             }, 1000);
    
//         }, 1000);
    
//     }, 1000);

// }, 1000);
    

console.log("one");
setTimeout(() => {console.log("two"); }, 1000);
console.log("three");
console.log("four");