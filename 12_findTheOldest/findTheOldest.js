const findTheOldest = function(people) {
let oldestPerson = 0;
let oldestAge = 0;
let age = 0;
const date = new Date();
const currentDate = date.getFullYear();

for (let i = 0; i < people.length; i++) {
    if (!(people[i].yearOfDeath)) {
        age = currentDate - people[i].yearOfBirth;
    }
    else {
        age = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    if (age > oldestAge) {
        oldestAge = age;
        oldestPerson = i;
    }
}
return people[oldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
