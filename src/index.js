exports.min = function min (array) 
{
    if(array == undefined || array == [])
    {
        return 0;
    }
    var Min = 0;
    Min = array[0];
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
exports.max = function max (array) {
        if(array == undefined || array == [])
    {
        return 0;
    }
    var Max = 0;
    for(var i = 0; i<array.length; i++)
    {
        if(array[i]>array[i+1] && array[i] > Max)
        {
            Max = array[i];
        }
    }
    return Max;
  }
  
exports.avg = function avg (array) {
        if(array == undefined || array == [])
    {
        return 0;
    }
    var sum = 0;
    for(i=0;i<array.length;i++){
        sum = array[i] + sum;
      }
    sum = sum/array.length;
    return sum;
  }
