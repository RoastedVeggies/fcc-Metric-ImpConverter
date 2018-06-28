/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result='';
    for(var i = 0;i<input.length;i++){
     if(!input[i].match(/[a-z]/i)){
        result+=input[i]
     }else{
       break;
     }
    }
    if(result===''){
     result=1; 
    }
    try{
    result = parseFloat(eval(result));
    }
    catch(err){
      result='invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result='';
    var prevLetter = false;
    var input = input.toLowerCase();
    for(var i = 0;i<input.length;i++){
     if(input[i].match(/[a-z]/i)){
        prevLetter = true;
        result+=input[i]
     }
     if(!input[i].match(/[a-z]/i) && prevLetter===true){
       break;
     }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit){
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit){
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initNum!='invalid number'){
      switch(initUnit){
        case 'gal':
          result = (initNum*galToL).toFixed(5);
          break;
        case 'l':
          result = (initNum/galToL).toFixed(5);
          break;
        case 'lbs':
          result = (initNum*lbsToKg).toFixed(5);
          break;
        case 'kg':
          result = (initNum/lbsToKg).toFixed(5);
          break;
        case 'mi':
          result = (initNum*miToKm).toFixed(5);
          break;
        case 'km':
          result = (initNum/miToKm).toFixed(5);
          break;
        default:
          result = initNum;
      }
    }else{
      result = initNum;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(returnNum === 'invalid number' && returnUnit === 'invalid unit'){
      result = 'invalid number and unit'}
    else{
    result = initNum +' '+initUnit+' converts to '+returnNum+' '+returnUnit;
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
