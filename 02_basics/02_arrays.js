console.log("Print Marvel Heros")
let marvel_heros = ["Thor", "ironMan", "spiderMan", "superMan"]
console.log(marvel_heros)

console.log()

console.log("Prinr dc Heros")
let dc_heros = ["Hulk", "Loky", "Dr.strange", "Groot"]
console.log(dc_heros)

console.log()

console.log("Adding Two Array in one Array, 1st (concat) method...")
let all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

console.log()

console.log("Adding Two Array in one Array, 2nd (...) method...")
let all_heros2 = [...marvel_heros, ...dc_heros]
console.log(all_heros2)

console.log()

////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Array.isArray("Aritra"))
console.log(Array.from("Aritra"))
console.log()

//////////////////////////////////////////////////////////////////////////////////////////////////////

score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1, score2, score3))

//////////////////////////////////////////////////////////////////////////////////////////////////////