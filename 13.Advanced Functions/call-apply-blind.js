//call & apply
function introduce (firstName, lastName) {
    console.log(`Hello ${to} my name is ${this.name}`);
}

introduce(`Gosho`, `Karaivanov`);

let person = {
    name: `Pesho`
}

introduce.call(person, `Gosho`, `Karaivanov`);
introduce.apply(person, [`Gosho`, `Karaivanov`]);


//bind
let superHuman = {
    name: `Superman`
};

introduce.bind(superHuman, `Mariyka`, `Petrova`);
