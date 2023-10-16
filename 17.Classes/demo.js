class Cat {
    isHungry = true; 
    
    constructor(name) {
        this.name = name;

    }

    makeSound() {
        console.log(`${this.name}: Meao!`);
    }

}



let firstCat = new Cat(`Navcho`);
let secondCat = new Cat(`Garry`);

console.log(firstCat);
console.log(secondCat);

secondCat.name = `Mishy`;
console.log(secondCat);


// Second example

let catNames = [
    `Navcho`,
    `Gary`,
    `Mishy`,
    `Zuza`,
    `Sisa`,
];

let cats = catNames.map(x => new Cat(x));
cats.forEach(x => x.makeSound());