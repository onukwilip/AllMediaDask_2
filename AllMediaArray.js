var _array = [1, 7, 2, 5];

function myarrayinput()
{
    _array.sort();
    var all = document.getElementById("arrayinput");
    _array.push(all.value);
    var ok = document.getElementById("lastno").value;
    
    //document.getElementById("lastno").value = all.value;
    document.getElementById("final").innerHTML = _array;
    document.getElementById("last").innerHTML = _array[_array.length - 1];
    //document.getElementById("last").innerHTML = document.getElementById("lastno").value;
    
    //alert(document.getElementById("lastno").value);
}

function display()
{
    _array.sort();
    document.getElementById("final").innerHTML = _array;
    document.getElementById("last").value = document.getElementById("lastno").value;
}