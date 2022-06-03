//3 no problem solve answer --> Count picnic budget
//function start with parameter as person Quantity value
function picnicBudget(personQuantity) {
  //if enter string or other key then throw this error line
  if (typeof personQuantity != "number") {
    return "please enter a number!";
  }
  //if enter negative or other key then throw this error line
  if (personQuantity < 1) {
    return "please enter valid quantity which is greater than 0!";
  }
  let personPicnicBudget;
  //person Picnic budget for 0 t0 100 person's quantity
  if (personQuantity <= 100) {
    personPicnicBudget = personQuantity * 5000;
  }
  //person Picnic budget for 101 t0 200 person's quantity
  else if (personQuantity >= 101 && personQuantity <= 200) {
    const restQuantity = personQuantity - 100; //more quantity of 100
    /* for 1st 100 quantity (100*5000) ,
MORE 100 quantity (restQuantity*4000)
*/
    personPicnicBudget = restQuantity * 4000 + 100 * 5000;
  }
  //person Picnic budget for greater than 200 person's quantity
  else if (personQuantity > 200) {
    const restQuantity = personQuantity - 200; //more quantity of 200
    /* for 1st 100 quantity (100*5000) , 2nd 100 quantity (100*4000)
MORE 200 quantity (restQuantity*3000)
*/
    personPicnicBudget = restQuantity * 3000 + 100 * 4000 + 100 * 5000;
  }
  ////return total Picnic budget
  return personPicnicBudget;
}
//function end

console.log(picnicBudget(211));
