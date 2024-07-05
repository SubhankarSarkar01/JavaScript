// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB Connected`)
})();
( (name)=>{
    console.log(`DB ${name} connected Two`)
} )("Subhankar")