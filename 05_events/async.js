// const sayAsmi = function(){
//     console.log("ASMI");
// }
// const changeText = function(){
//     document.querySelector('h1').innerHTML = "A girl"
// }
// const changeMe = setTimeout(changeText, 2000) 
// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log("STOP")
// })

// const sayDate = function(){
//     console.log("asmi", Date.now());
// }
// const intervalId = setInterval(sayDate, 1000)
//  //clearInterval(intervalId);

// document.querySelector("#start").addEventListener('click', function(){
//     sayDate(intervalId);
// })
// document.querySelector("#stop").addEventListener('click', function(){
//     clearInterval(intervalId);
//     console.log("Stop")
// })

let intervalId;  // Declare intervalId outside the scope to access it globally

const sayDate = function() {
    console.log("asmi", Date.now());
}

document.querySelector("#start").addEventListener('click', function(){
    if (!intervalId) {  // Check if intervalId is not set (i.e., timer is not already running)
        intervalId = setInterval(sayDate, 1000);  // Start the interval
    }
});

document.querySelector("#stop").addEventListener('click', function(){
    if (intervalId) {  // Check if the interval is running
        clearInterval(intervalId);  // Stop the interval
        intervalId = null;  // Reset intervalId
        console.log("Stop");
    }
});

