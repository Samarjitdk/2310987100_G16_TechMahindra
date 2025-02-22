// Question 1

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
console.log(counter.getCount()); 



// Question 2

function memoizedFibonacci() {
    const cache = {};
    function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n <= 1) {
            cache[n] = n;
            return n;
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    return fib;
}

const fib = memoizedFibonacci();

console.time('First fib(40)');
console.log(fib(40)); 
console.timeEnd('First fib(40)');


console.time('Second fib(40)');
console.log(fib(40)); 
console.timeEnd('Second fib(40)');