function squareDigits(num){
  //may the code be with you
  var myString = num.toString(); //convert numbers to string
  myString = myString.split(""); //split each of the digits
  var result = "";

  for(var  i = 0; i < myString.length; i++){
    result += Math.pow(parseInt(myString[i], 10),2) //Concatenate squared digits (as decimals) into the result string
  }

  return parseInt(result); //Parse string to convert to integer again
}
