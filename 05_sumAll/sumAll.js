const sumAll = function(n, m) {
if ((typeof(n) != "number") || (typeof(m) != "number") || n < 0 || m < 0) {
    return "ERROR";
}
larger = Math.max(n, m);
smaller = Math.min(n,m);
let sum = 0;
for (let i = smaller; i <= larger; i++) {
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
