var exports = [8,3,5,67,21,24,7,0,-756];
var Min = 0;
var Max = 0;
var sum = 0;

exports.min = function min (array) {
    Min = array[0];
    for(var i = 1; i<array.length; i++) 
    {
        if(array[i]<Min)
        {
            Min = array[i];
        }
    }
    alert(Min);
    return 0;
  }


exports.max = function max (array) {
    for(var i = 0; i<array.length; i++)
    {
        if(array[i]>array[i+1] && array[i] > Max)
        {
            Max = array[i];
        }
    }
    alert(Max);
    return 0;
  }
  
exports.avg = function avg (array) {
    for(i=0;i<array.length;i++){
        sum = array[i] + sum;
      }
    if(sum != 0) {
    sum = sum/array.length;
    alert(sum);
    }
    else
    return 0;
  }
  
  exports.min (exports);
  exports.max (exports);
  exports.avg (exports);
