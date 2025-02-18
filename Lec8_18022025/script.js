// HOF
//  data = [2,4,6,8,10];

//   const calDoubleData = function(data){
//     var output = [];
//     for(let i=0; i<data.length; i++){
//         output.push(data[i]*2);
//     }
//     return output;
//   }

//   const calHalfData = function(data){
//     var output = [];
//     for(let i=0; i<data.length; i++){
//         output.push(data[i]/2);
//     }
//     return output;
//   }

//   const calAddTen = function(data){
//     var output = [];
//     for(let i=0; i<data.length; i++){
//         output.push(data[i]+10);
//     }
//     return output;
//   }

//   console.log(calDoubleData(data));
//   console.log(calHalfData(data));
//   console.log(calAddTen(data));

// data2 = [2, 4, 6, 8, 10];

// function doubleData(data){
//     var ans = data*2;
//     return ans;
// }

// function halfData(data){
//     var ans = data/2;
//     return ans;
// }

// function addData(data){
//     var ans = data+ 10;
//     return ans;
// }

// const calData = function (data, callback) {
//   console.log("We are inside CalculateData");
//   var output = [];
//   for (let i = 0; i < data.length; i++) {
//     output.push(callback(data[i]));
//   }
//   return output;
// };

// console.log(calData(data2,doubleData));
// console.log(data2.map(doubleData))
// console.log(calData(data2,halfData));
// console.log(calData(data2,addData));

// //Polyfill of Manp Feature of JS, by using prototype
// Array.prototype.mapp = function(logic){
//     var output = [];
//     for(let i=0; i<this.length; i++){
//         output.push(logic(this[i])) ;
//     }
//     return output;
// }

// console.log(data2.mapp(doubleData));

// data = [2, 9, 16, 42, 71];

// function dia(r) {
//   var ans = r * 2;
//   return ans;
// }

// function circum(r) {
//   var ans = 2 * 3.14 * r;
//   return ans;
// }

// function area(r) {
//   var ans = 3.14 * r * r;
//   return ans;
// }

// const calculate = function (data, callback) {
//   console.log("Running");
//   var output = [];
//   for (let i = 0; i < data.length; i++) {
//     output.push(callback(data[i]));
//   }
//   return output;
// };

// console.log(data.map(dia));
// console.log(data.map(circum));
// console.log(data.map(area));




// data = [2,4,9,7,6]

// const output = [];
// for(let i=0; i<data.length; i++){
//     if()
// }



// const users = [
//         {Name:'Samar', age:24, gender:'male', },
//         {Name:'Satwinder', age:23, gender:'male', },
//         {Name:'Manpreet', age:23, gender:'female', },
//         {Name:'Raman', age:21, gender:'female', },
//         {Name:'Bhagat', age:26, gender:'male', },
//         {Name:'Jassy', age:21, gender:'female', },
//     ]


// let filteredArray = users.filter((element)=>{
//     return element.Name+element.gender;
// })

const users = [
    {fname:"Pratiyush", lname:"Singh", age:23},
    {fname:"Prakash", lname:"Saini", age:21},
    {fname:"Sahil", lname:"Aggarwal", age:20},
    {fname:"Ayush", lname:"Jawa", age:28},
    {fname:"Daksh", lname:"Singh", age:40},
]

//lets combine fname and lname

const FullName = users.map((users)=>
    users.fname +" "+users.lname
);
console.log(FullName)

// let filter out age above 24 and there full name
