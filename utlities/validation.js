function isValid2dArray(input) {
  if (
    !(
      input.length > 0 &&
      input.constructor === Array &&
      input[0][0] &&
      input[0].constructor === Array
    )
  ) {
    return false;
  }
  return input.every(arr => arr.length === 2 && arr.every(number => isNonNegativeInteger(number)));
}

 function isNonNegativeInteger(input) {
  return Number.isInteger(input) && input >= 0;
}


module.exports={ isValid2dArray,isNonNegativeInteger}
