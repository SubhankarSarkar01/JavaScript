//  for loop

// for (let i = 0;i<=10;i++){
//     const element = i;
//     console.log(i);
// }

// for(let i =1 ;i<=10;i++){
//     console.log(`${4}  * ${i} = ${4 * i}`)
// }

let myArray = ["flash","Batman","superman"]
for(let i=0;i<myArray.length;i++){
    const element = myArray[i];
    console.log(element)
}

// Break and continue
for(let i=0;i<=10;i++){
    if(i==6){
        console.log("Detected 5")
        break
    }
    console.log(`value of i is ${i}`)
}

for(let i=1;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(`value of i is ${i}`)
}