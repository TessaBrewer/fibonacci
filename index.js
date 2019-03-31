var lastOne = 0;
var thisOne = 1;
while(thisOne < 500)
{
    console.log(thisOne);
    thisOne += lastOne;
    lastOne = thisOne - lastOne;
}