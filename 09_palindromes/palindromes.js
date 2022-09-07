const palindromes = function (str) {
    let strlen = str.length;
    aux1 = ""
    aux2 = ""
    for (let i = 0; i < strlen; i++) {
        if ((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) || (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)) {
            aux1 = aux1 + str[i].toUpperCase();
            aux2 = str[i].toUpperCase() + aux2;
        }
    }
    if (aux1 === aux2) {
        return true;
    }
    return false;
    };
    
    // Do not edit below this line
    module.exports = palindromes;
    