const fibonacci = function(n) {
let current;
if (n == 0 || n == 1) {
    return 1;
}
if (n < 0) {
    return "OOPS";
}
let fibArray = [n];
fibArray[0] = 1;
fibArray[1] = 1;
for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
}
return fibArray[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
