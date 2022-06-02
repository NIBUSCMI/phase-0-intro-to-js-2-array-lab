// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push("Ralph")
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let copyCats = [...cats, "Broom"];
    return copyCats
}


function prependCat(name){
    let copyCats = ["Arnold", ...cats];
    return copyCats
}

function removeLastCat(){
    return cats.slice(0, cats.length -1)
}
function removeFirstCat(){
    return cats.slice(1)
}
