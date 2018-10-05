var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
