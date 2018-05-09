var chocolateBars =['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(anArr, anEl){
  var newArr = [anEl,...anArr];
  
  return newArr;
}

