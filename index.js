var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name){
  kittens.unshift("Ralph");
  return kittens;
}
