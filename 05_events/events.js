// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false)
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false)

// //EVENT PROPAGATION (JO BHI EVENT INSIDE HOTA HAI YA ANDR HOTA HAI VO PHLE 
// //CHALTA HAI THEN OUTER EVENTS)
// //type, timestamp, defaultPrevented
// //target, toElement, srcElement, currentTarget,
// //clientX, clientY, screenY
// //altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
        //removeIt.parentNode.removeChild(removeIt)
    }
})