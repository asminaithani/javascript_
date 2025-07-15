/*const coding = [ "js", "ruby", "java", "python", "cpp"]
coding.forEach( function (item){
    console.log(item);
    
}

coding.forEach((val)=>{
    console.log(val)
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
*/

const myCode = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCode.forEach((item)=>{
    console.log(item.langName)
})