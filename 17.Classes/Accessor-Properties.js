class Circle {
    #pi = Math.PI; 

    constructor(radius) {
        this.radius = radius;
        this._perimeter = 2 * Math.PI * radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    set area(value) {
        if (value < 0) {
            throw new Error(`Area cannot be less than 0`);
        }
        this.radius = value / 2;
    }

    get diameter () {
        return this.radius * 2;

    }

    set diameter(value) {
        if (value < 0) {
            throw new Error(`Distance cannot be less than 0`);
        }

        this.radius = value / 2;
    }

    get perimeter() {
        return this._perimeter;
    }

    set perimeter(value) {
        if (value < 0) {
            throw new Error(`Perimeter cannot be less than 0`);
        }

        this._perimeter = value;
    }

    
}

let circle = new Circle(2);

console.log(circle.area);

circle.diameter = 10;
console.log(circle.radius);
console.log(circle.area);