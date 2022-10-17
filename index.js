
function consommaion (price, quantity) {

  if (price*quantity > 2400) {
    console.log('la consommation pas regulière');
  } else {
    console.log('le consommation est regulière');
  }
}

let tableau = [43, 58, 20, 5, 63, 83, 410, 10, 25];

let numberguess = 63;

function binarySearch (array, numberToGuess) {
  
  let start = 0,
  max = array.length - 1,
  middle = Math.floor((start + max)/2);

  while (start <= max) {
    let guess = array[middle];

    if (guess === numberToGuess) {
      return middle;
    }else if (guess < numberToGuess){
      end = middle - 1;
    }else {
      start = middle + 1;
    }
  }
  return null;
}

const result = binarySearch (tableau, numberguess);

console.log(result);