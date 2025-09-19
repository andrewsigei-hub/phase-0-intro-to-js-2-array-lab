const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)  {
  cats.push(name)
}

function destructivelyPrependCat(name){
  cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
  cats.pop()
}

function destructivelyRemoveFirstCat(name){
  cats.shift()
}

function appendCat(name) {
  return [...cats, name]; // spread operator creates a new array
}

function prependCat(name) {
  return [name, ...cats]; // new array with name at the front
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1); // copy without last
}

function removeFirstCat() {
  return cats.slice(1); // copy without first
}