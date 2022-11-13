function isPalindrome(x) {
    x = x.toLowerCase();
    let newStr = x.split('').reverse().join('');
    if (newStr === x) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isPalindrome('adDa');

function toStringType(x) {
    return x.toString();
}

let x = -3;
console.log(typeof (toStringType(x)));

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // return args.sort((a, b) => a - b)[0];
        return Math.min(...args);
    }
}

let sif = new SmallestIntegerFinder();
let newArr = [34, 15, -188, 2];
console.log(sif.findSmallestInt(newArr));

function litres(time) {
    let res = Math.floor(time * 0.5);
    return res;
}

let time = 1.4;
console.log(litres(time));

function Century(year) {
    if (year % 100 == 0) {
        return Math.trunc(year / 100);
    } else {
        return Math.trunc((year / 100) + 1);
    }
}

let year = 1900;

console.log(Century(year));

function greet(arrHW) {
    let HW = '';
    for (let i = 0; i < arrHW.length; i++) {
        HW += strHW_arr[i];
    }
    return HW;
}

let arrHW = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
console.log(greet(arrHW));
