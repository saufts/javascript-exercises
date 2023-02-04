const caesar = function(text, shiftFactor) {
    
    let charCodeArr = [];
    let encryptedText = '';

    for(let i = 0; i < text.length; i++) {

        let code = text.charCodeAt(i);
        let shiftedCode = code + (shiftFactor % 26);

        if(isLetter(code)) {
            //charCodeArr.push(wrapAroundAlphabet(shiftedCode)); 
            if(code >= 97 && code <= 122) charCodeArr.push(wrapLowerCase(shiftedCode));
            else if(code >= 65 && code <= 90) charCodeArr.push(wrapUpperCase(shiftedCode));

        }
        else charCodeArr.push(text.charCodeAt(i));
   
    }
    encryptedText = String.fromCharCode(...charCodeArr);
    return encryptedText;

};

const isLetter = function(val) {

    if(val > 64 && val <= 90 || val > 96 && val <= 122) {
        return true;
    }
}

const wrapLowerCase = function(val) {
    if(val > 122) {
        return val -= 26;
    } else if (val < 97) {
        return val += 26; 
    } else {
        return val;
    }
}

const wrapUpperCase = function(val) {
    if(val > 90 && val < 122) {
        return val -= 26;
    }
    else if (val < 65) {
        return val += 26;
    } else {
        return val;
    }
}

// Do not edit below this line
module.exports = caesar;
