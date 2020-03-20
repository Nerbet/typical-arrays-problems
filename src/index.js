exports.min = function min (array) 
{
    var Min = 0;
    Min = array[0];
    if(Array.isArray(array) && array.length)
    {return 0;}
    else
    {
    for(var i = 1; i<array.length; i++) 
    {
        if(array[i]<Min)
        {
            Min = array[i];
        }
        
    }
    alert(Min);
    return Min;
    }
}


exports.max = function max (array) {
    var Max = 0;
    if(Array.isArray(array) && array.length)
    {return 0;}
    else
    {
    for(var i = 0; i<array.length; i++)
    {
        if(array[i]>array[i+1] && array[i] > Max)
        {
            Max = array[i];
        }
    }
    alert(Max);
    return Max;
    }
  }
  
exports.avg = function avg (array) {
    if(Array.isArray(array) && array.length)
    {return 0;}
    else
    {
    var sum = 0;
    for(i=0;i<array.length;i++){
        sum = sum + array[i];
      }
    sum = sum/array.length;
    alert(sum);
    return sum;
    }
  }
