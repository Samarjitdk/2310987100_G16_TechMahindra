// console.log(a);
// var a = 10;

// function asumOfTwo(a, b) {
//   var sum = a + b;
//   return sum;
// }

// console.log(asumOfTwo(10, 9));
// console.log(a);


// function two() {
//   return 2;
// }

// function four() {
//   return 4;
// }

// console.log(1);
// console.log(two());

// setInterval(() => {
//   console.log(3);
// }, 3000);

// console.log(four());

// setInterval(() => {
//   console.log(5);
// }, 5000);

// console.log(6);



// for(var i=1; i<=6; i++){
//     function test(i){
//         setTimeout(()=>{
//             console.log(i);
//         },1000)
//     }
//     test(i);
// }

// // whenever function is created it creates its own scope
//     // this is basically called closures


// // CASE-1
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z=x();
// console.log(z);

// z();

// // CASE-2
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }

// var z=x();
// console.log(z);

// z();

// // CASE-3
// function z(){
//     var b=900;
//     function x(){
//         a=7;
        
//     }
//     a=100;
//     return y;
// }

// var z=x();
// console.log(z);

// z();


// Important Case of CLOSURES-----------its main cause is data hiding and encapsulation

// var count=0;

// function increment(){
//     count++;
// }
// increment();
// increment();
// increment();
// console.log(count);


// function protect(){
//     var count=0;

//     function increment(){
//         count++;
//     }
//     increment();
//     increment();
//     increment();
//     console.log(count);

// }
// protect();

// HOF-Higher Order Function

// function counter(){
//     var count=0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();

//Do increment and decrement with this keyword

function Counter(){
    var count=0;
    this.increment = function(){
        count++;
        console.log(count);
    }
    this.decrement = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.decrement();