// // // call
// // // getName.call(studentSahil);
// // // getName.call(studentJasjot);

// // const getStudent1 = getName.call(studentSahil,"G16","g23");
// // const getStudent2 = getName.apply(studentJasjot,["G16,g15,g17"],["g22"]);

// // // bind
// // const  getStudentBind = getName.bind(studentSahil,"G16");
// // console.log(getStudentBind());
// // console.log(getStudent1);

// // -------------------------------------------------

// // Currying in JS

// // What is event Bubbling and event Capturing?

// document.getElementById("GGP").addEventListener("click", () => {
//   console.log("This is Great Grand Parent DIV");
// });

// document.getElementById("GP").addEventListener(
//   "click",
//   () => {
//     console.log("This is Grand Parent DIV");
//   },
//   false
// );

// document.getElementById("P").addEventListener("click", () => {
//   console.log("This is Parent DIV");
// });

// // document.getElementById("P").addEventListener("click", (e) => {
// //   console.log("This is Parent DIV");
// //   e.stopPropogation();
// //   console.log(e);
// // }); //stopPropogation

// document.getElementById("Child").addEventListener("click", () => {
//   console.log("This is Child DIV");
// });

// // const myCurryingFunction(){}


// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/cs"
// })

// document.getElementById("me").addEventListener("click",()=>{
//     window.location.href="localhost/cs"
// })

// document.getElementById("ce").addEventListener("click",()=>{
//     window.location.href="localhost/cs"
// })

// document.getElementById("subjects").addEventListener("click",(e)=>{
//     window.location.href=e.target.id;
//     console.log("http://localhost/"+e.target.id);
// })//now instead of applying event listener to each we have applied target and will hit the page with the id.
//it is called EVENT DELEGATION


// document.getElementById("searchBox").addEventListener("input",fetchData);

// function fetchData(){
//     console.log("Fetching API Data...");
// }

// document.getElementById("searchBox").addEventListener("input",debouncingFunction);

// function protect(){

//     let timeReset;
    
//     function fetchData(){
//         console.log("Fetching API Data...");
//     }
    
    
//     function debouncingFunction(){
//         clearTimeout(timeReset);
//         timeReset = setTimeout(fetchData,2000);
//     }
// }



// TASK------
//https://api.chunknorris.io/jokes/categories
//fetch : async await
//filter
//debouncing