//2nd problem solve --> total price
//function start with 3 parameter
function pandaCost(shingaraQuantity, somusaQuantity, jilapiQuantity) {
  // //if enter string or other key then throw this error line
  if (
    typeof shingaraQuantity != "number" ||
    typeof somusaQuantity != "number" ||
    typeof jilapiQuantity != "number"
  ) {
    return "please enter a number quantity!";
  }
  // //if enter negative or other key then throw this error line
  if (shingaraQuantity < 0 || somusaQuantity < 0 || jilapiQuantity < 0) {
    return "please enter valid quantity which is equal/greater than 0!";
  }
  //food price list
  let shingaraPrice = 7;
  let somusaPrice = 10;
  let jilapiPrice = 15;
  //all food price calculation
  let shingaraPriceQuantity = shingaraQuantity * shingaraPrice;
  let somusaPriceQuantity = somusaQuantity * somusaPrice;
  let jilapiPriceQuantity = jilapiQuantity * jilapiPrice;
  //total
  let totalpriceAmount =
    shingaraPriceQuantity + somusaPriceQuantity + jilapiPriceQuantity;
  //return total price amount
  return totalpriceAmount;
}
//end function

console.log(pandaCost(3,5,0));

