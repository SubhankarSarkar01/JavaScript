const marvel_Heros = ["thor","Ironman","spiderman"]
const dc_Heros = ["superman","Batman","flash"]

//  marvel_Heros.push(dc_Heros)
//  console.log(marvel_Heros)
 const new_Heros = marvel_Heros.concat(dc_Heros)
 console.log(new_Heros)

 const all_new_Heros = [...marvel_Heros,...dc_Heros]
 console.log(all_new_Heros)

 console.log(Array.isArray("subhankar"))
 console.log(Array.from("subhankar"))
 console.log(Array.from({name:"subhankar"}))

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3))