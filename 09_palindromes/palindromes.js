const palindromes = function (str) {
    str = str.toUpperCase().replace(/\W/g, '');
    let newStr = [...str].reverse().join("");
    if(newStr === str) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
