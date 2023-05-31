// Write your solution here!
let kittens=['Milo', 'Otis', 'Garfield'];

//appends a cat to the end of the cats array
function destructivelyAppendKitten(name){
    kittens.push(name);
}
//prepends a cat to the beginning of the cats array
function destructivelyPrependKitten(name){
    kittens.unshift(name);
}
//removes the last cat from the cats array
function destructivelyRemoveLastKitten(){
    kittens.pop();
}
//removes the first cat from the cats array
function destructivelyRemoveFirstKitten(){
    kittens.shift();
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendKitten(name){
  return kittens.concat(name);
}
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependKitten(name){
  const newKittens=[name, ...kittens];
  return newKittens;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstKitten(){
  return kittens.slice(1,kittens.length);
}