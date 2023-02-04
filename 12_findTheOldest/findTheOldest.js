
const findTheOldest = function(ppl) {
    
    ppl.forEach (person => {
        if('yearOfDeath' in person) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        } else  {
            const date = new Date();
            let year = date.getFullYear();
            person['age'] = year - person.yearOfBirth;
        };
    });

    let sortedPeople = ppl.sort((p1, p2) => (p1.age < p2.age) ? 1 : -1);
    console.log(sortedPeople);
    return sortedPeople[0];

};

// Do not edit below this line
module.exports = findTheOldest;
