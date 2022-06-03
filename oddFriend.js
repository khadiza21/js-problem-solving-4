//4 no problem solve answer --> Find odd friend
//function start with parameter as array of person names list
function oddFriend(array) {
  //if enter number or other key then throw this error line
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "string") {
      return "please enter all string element of array!";
    }
  }
  //find friend name which name length is odd
  let myFriend;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.length % 2 != 0) {
      myFriend = element;
      return myFriend;
    }
  }
  //if don't have any name of odd length
  return "You Have No Odd Friend!";
}
//function end

console.log(oddFriend(['']));
