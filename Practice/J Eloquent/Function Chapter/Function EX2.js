function IsItEven(a){
    if (a == 1){
        return false;
    }
    else if (a == 0){
        return true;
    }
    else if (a < 0){
        return false;
    }
    else {
        return IsItEven(a - 2);
    }
}

console.log(IsItEven(53));

console.log(IsItEven(50));

console.log(IsItEven(-22));

console.log(IsItEven(0));