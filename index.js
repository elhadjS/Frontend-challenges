
function consommaion (price, quantity) {

  if (price*quantity > 2400) {
    console.log('la consommation pas regulière');
  } else {
    console.log('le consommation est regulière');
  }
}


function binarySearch (array, numberToGuess) {
  
  let start = 0;
  let max = array.length - 1;
  let middle = Math.floor((start + max)/2);

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