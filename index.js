// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
    
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}function destructivelyRemoveLastCat(){
 cats.pop("Garfield")   
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
const newCat = [...cats,"Broom"]
return newCat     
}
function prependCat(name){
    const newerCat =[name,...cats];
    return newerCat

}
function removeLastCat(){
    const removeLastCat = cats.slice(cats,cats.length-1)
 return removeLastCat
}
function removeFirstCat(){
const removeFirstCat = cats.slice(1)
return  removeFirstCat  
}