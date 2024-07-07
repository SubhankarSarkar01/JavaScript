const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (val){
//     console.log(val);
// })

coding.forEach((item)=>{
    // console.log(item)
})
function printme(item){
    // console.log(item)
}
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding  = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },   
]
myCoding.forEach( (item) =>{
    console.log(item.languageFileName)
})