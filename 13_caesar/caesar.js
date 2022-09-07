const caesar = function(text, shift) {
let newText = [text.length];
shift = (shift + 26) % 26
for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        // newText[i] = String.fromCharCode(((text.charCodeAt(i) + shift) % 91));
        newText[i] = (text.charCodeAt(i) + shift);
        if (newText[i] > 90) {
            newText[i] = 65 + ((newText[i] - 1) - 90);
        }
        newText[i] = String.fromCharCode(newText[i]);

    }
    else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        newText[i] = (text.charCodeAt(i) + shift);
        if (newText[i] > 122) {
            newText[i] = 97 + ((newText[i] - 1) - 122);
        }
        newText[i] = String.fromCharCode(newText[i]);
    }
    else {
        newText[i] = text[i];
    }
}
return newText.join("");
};

// Do not edit below this line
module.exports = caesar;
