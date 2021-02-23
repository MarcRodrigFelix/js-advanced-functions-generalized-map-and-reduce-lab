// Add your functions here


function map(srcArray, funk){
  let newArray = []
  
  for (let i = 0; i < srcArray.length; i++){
    newArray.push(funk(srcArray[i]))
  }

  return newArray
};



function reduce(srcArray, funk, startingPoint){
  let a = (!!startingPoint) ? startingPoint : srcArray[0]
  let i = (!!startingPoint) ? 0 : 1

  for (; i < srcArray.length; i++){
    a = funk(srcArray[i], a)
  }

  return a
}