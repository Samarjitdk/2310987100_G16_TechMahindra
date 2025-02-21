// TASK------
//https://api.chunknorris.io/jokes/categories
//fetch : async await
//filter
//debouncing

document.getElementById("searchBar").addEventListener("input",debouncingFunction);

let timeReset;
async function fetchData(){
    console.log("Fetching API Data")
    const data = await fetch("https://api.chunknorris.io/jokes/categories");
    const myData = await data.json();
    return myData;
}

function debouncingFunction(){
    clearTimeout(timeReset);
    timeReset = setTimeout(fetchData,2000);
}