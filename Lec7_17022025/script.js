

// function reachedRestaurant(callback) {
//   console.log("reachedRestaurant");
//   setTimeout(callback, 1000);
// }

// function tabelFind(callback) {
//   console.log("tabelFind");
//   setTimeout(callback, 1000);
// }

// function menuCheck(callback) {
//   console.log("MenuCheck");
//   setTimeout(callback, 1000);
// }

// function starter(callback) {
//   console.log("starter");
//   setTimeout(callback, 1000);
// }

// function mainCourse(callback) {
//   console.log("mainCourse");
//   setTimeout(callback, 1000);
// }

// function dessert(callback) {
//   console.log("dessert");
//   setTimeout(callback, 1000);
// }

// function payBill() {
//   console.log("payBill");
// }

//when we run them one by one it is called = Chaining the callbacks

// payBill(dessert(mainCourse(starter(menuCheck(tabelFind(reachedRestaurant()))))));

// reachedRestaurant(() => {
//   tabelFind(() => {
//     menuCheck(() => {
//       starter(() => {
//         mainCourse(() => {
//           dessert(() => {
//             payBill();
//           });
//         });
//       });
//     });
//   });
// });
// //This is called = Pyramid of Doom (Expansion of code horizontally)
// //Readability is good
// //Debugging is very difficult
// //Promise is intoduced to solve this.
