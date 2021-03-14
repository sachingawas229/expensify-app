// const person = {
//     name: 'Sachin',
//     age: '29',
//     location: {
//         city: 'Edinburgh',
//         temp: 57
//     }
// }

// const {name: firstName = 'Default', age} = person;
// //const name = person.name;
// //const age = person.age;


// console.log(`${firstName} is ${age}`);
// const {temp: temperature, city} = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

/// Array distrcturing

const address = ['175/9, Great Junction Street', 'Leith', 'Edinburgh', 'EH6 5LQ'];

const [, area, city = 'New York'] = address;

console.log(`you are in ${area} ${city}`);
