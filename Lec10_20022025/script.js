//Practice Callback

// computer("Samar", open);

// function computer(name, callback){
//     console.log("Hi " + name);
//     callback();
// }

// function open(){
//     console.log("Open a Laptop");
// }

// fetchData(processData);

// function fetchData(callback){
//     console.log("Fetching Data.......");
//     setTimeout(function(){
//         const data = {name: "Samar", age:24};
//         callback(data);
//     })
// }

// Async-Await

// const helloTechMahindra = async function(){//this is function expression
//     console.log("This is HelloTech Mahindra")
// }

// console.log(helloTechMahindra);

// async function techDirectFunction() {
//     console.log("THIS IS helloTECH MAHINDRA");
// }

// const techData = techDirectFunction();
// console.log(techData);
// techData.then((res)=>{
//     return res;
// })

// const samarPromised = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("I will be on time");
//     },4000)
// })

// console.log(samarPromised);

// console.log("Hello Class")

// function techM(){
//     console.log("Samar")
// }
// techM();

// console.log("Class end");

// const projecSubmissionByKuber = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("SUBMITTED PROJECT SUCCESSFULLY");
//   }, 5000);
// });

// // function projectEvaluation(){
// //     const projectFile = projecSubmissionByKuber;
// //     console.log(projectFile);
// // }

// async function projectEvaluation() {
//   const projectFile = await projecSubmissionByKuber; //now we have made it async await, now it will wait till Kuber submits the project only then th e viva will start
//   console.log(projectFile);
// }

// projectEvaluation();


// Task------------------
// console.log("Class Start")

// async function fileWriteByKuber(){
//     const file = 
// }


// ------------------------

async function fetchApiData() {
    try{
        const data = await fetch("https://api.chucknorris.io/jokes/categories");
        const mydata = await data.json();
        return mydata;    
    }
    catch(err){
        console.log(err);
    }
}

    const finalData = fetchApiData();
    finalData.then((res)=>{
        console.log(res)
    })

