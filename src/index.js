var exports = [8,3,5,67,21,24,7,0,-756];
var Min = 0;
var Max = 0;
var sum = 0;

exports.min = function min (array) {
    Min = exports[0];
    for(var i = 1; i<exports.length; i++) 
    {
        if(exports[i]<Min)
        {
            Min = exports[i];
        }
    }
    alert(Min);
    return 0;
  }


exports.max = function max (array) {
    for(var i = 0; i<exports.length; i++)
    {
        if(exports[i]>exports[i+1] && exports[i] > Max)
        {
            Max = exports[i];
        }
    }
    alert(Max);
    return 0;
  }
  
exports.avg = function avg (array) {
    for(i=0;i<exports.length;i++){
        sum = exports[i] + sum;
      }
    sum = sum/exports.length;
    alert(sum);
    return 0;
  }
  
  exports.min ();
  exports.max ();
  exports.avg ();
  
