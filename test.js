//4 no problem solve answer --> Find odd friend
//function start with parameter as array of person names list
function oddFriend(array) {
  //if enter number or other key then throw this error line
  // for (let i = 0; i < array.length; i++) {
  //   if (typeof array[i] != "string") {
  //     return "please enter all string element of array!";
  //   }
  // }
  for (const element of array) {
    if (typeof array[i] != "string") {
      return "enter all string el";
    }
  }
  //find friend name which name length is odd

  for (const element of array) {
    if (element.length % 2 != 0) {
      return element;
    }
  }
  //if don't have any name of odd length
  return "You Have No Odd Friend!";
}
//function end

console.log(oddFriend(["ereey", "prrrt", "brere"]));
