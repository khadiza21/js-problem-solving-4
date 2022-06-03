//1 no problem solve answer --> ana To vori //16 ana = 1 vori
//function start with parameter as ana value
function anaToVori(ana) {
  //if enter string or other key then throw this error line
  if (typeof ana != "number") {
    return "please enter a number!";
  }
  //if enter negative or other key then throw this error line
  if (ana < 16) {
    return "please enter valid number which is greater than 15!";
  }
  //calculation to get ana to vori
  let vori = ana / 16;
  //return vori value
  return vori;
}
//function end

