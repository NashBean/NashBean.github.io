
//------------------------------------------
function reverseString(str) {
    var i;
    var strCount = str.length;
    var result = ""; 
    for (i = strCount-1; i >= 0; i--) {
        //assignStringGeneric(methods[i]);
        result = result + str[i];
    }
    return result;
}
//------------------------------------------

//------------------------------------------
function findLongestWord(str) 
{
    var wordarray = str.split(' ');
    var longest = 0;
    
    for(var i=0; i<wordarray.length; i++)
    {
        if(wordarray[i].length > longest)
        {longest = wordarray[i].length;}
    }
    
    return longest;
}
//------------------------------------------

//------------------------------------------
function largestOfFour(arr) 
{
    var ln=0;//largest number
    var result = [0, 0, 0, 0];
    for(var oi=0; oi<arr.length; oi++)
    {
        ln=0;
        for(var ii=0; ii<arr[oi].length; ii++)
        {
            if(ln < arr[oi][ii])
            {ln = arr[oi][ii];}
        }
        result[oi] = ln;
        
    }
    
    return result;
}
//------------------------------------------

//------------------------------------------
function truncateString(str, num) 
{
    var result=str;
    if(str.length > num && num < 4)
    {
        result = str.slice(0, num) + "..." ;
        
    }
    else if(str.length > num)
    {
        result = str.slice(0, num-3) + "..." ;
    }
    console.log(result);
    return result;
}
//------------------------------------------

//------------------------------------------
function slasher(arr, howMany) 
{
    // it doesn't always pay to be first
    if(arr.length < howMany) {return [];}
    arr.splice(0, howMany);
    return arr;
}
//------------------------------------------

//------------------------------------------
function isValid(item) 
{
    return  item !== 0 && item && item !== false && item !== "" && item!==undefined;
    //obj !== false && obj !== null && obj !== 0 && obj !== "" && obj!==undefined && !isNaN(obj);
}

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(isValid);
}
//------------------------------------------

//------------------------------------------
function mutation(arr) 
{
    var result = true;
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    for(var i=0; i<arr[1].length; i++)
    {
        if(arr[0].indexOf(arr[1][i]) < 0 ) 
        {result = false;}
    }
    
    return result;
}
//------------------------------------------

//------------------------------------------
function chunkArrayInGroups(arr, size) {
    var tda=[]; // two dimensional array 
    var temp=[];
    var x=0;
    //var y=0;
    for(var i=0; i<arr.length; i++)
    {
        temp.push(arr[i]);
        x++;
        if(x >= size){x=0; tda.push(temp); temp = [];}
        
    }
    if(arr.length%size) {tda.push(temp);}
    
    return tda;
}
//------------------------------------------

//------------------------------------------
function titleCase(str) 
{
    var sa = str.split(' ');
    var nsa = ["", ""];
    
    for(var i=0; i<sa.length; i++)
    {
        var temp = sa[i][0].toUpperCase(); 
        // if(sa[i][0] != sa[i][0].toUpperCase())
        //   {sa[i][0].replace(sa[i][0].toUpperCase());}
        for(var l=1; l<sa[i].length; l++)
        {
            temp = temp + sa[i][l].toLowerCase();
            //if(sa[i][l] != sa[i][l].toLowerCase())
            //  {sa[i][l].replace(sa[i][l].toLowerCase());}
        }
        nsa[i] = temp;
    }
    //  str = sa.join(' ');
    console.log(nsa.join(' '));
    return nsa.join(' ');
}
//------------------------------------------

//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
