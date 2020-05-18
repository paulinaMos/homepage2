const firstName= 'Paulina';
const age = 29;


const emptyParagraph = document.querySelector('.person__description--js');

emptyParagraph.innerHTML = `Lubię placki i absolutnie nie umiem w JS-y.`


function greet(firstName, age) {
    console.log(`Cześć! Nazywam sie ${firstName} i mam ${age} lat.`)
}

greet(firstName, age)

const greetNew = (age, firstName) => {
    console.log(`Cześć znowu! Nazywam się ${firstName} i mam ${age} lat.`)
}

greetNew(age, firstName)


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.person__description--js', `Witaj świecie, mam na imię ${firstName}`);

// alert('Witaj zagubiony wędrowcze w moich skromnych progach!');


const calculate = (myNumber) => myNumber*7

const myResult = calculate(5);
console.log(myResult)

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed!`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'Darth Vader',
        age: 44,
    }
}

console.log(deathStar);

console.log(deathStar.commander.name);

deathStar.fire('Naboo');


const humanOne = {
    name: 'Maciek',
    age: 32,
    address: {
        street: 'Warszawska',
        city: 'Gdynia',
    }
}

// const humanTwo = {
//     name: 'Stefan',
//     age: 32,
// }

const humanTwo = humanOne

humanTwo.age = 25

console.log(humanOne)
console.log(humanTwo)