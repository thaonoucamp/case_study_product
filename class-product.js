class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}
let Iphone = new Product('Iphone 12','$1000');
let Mac = new Product('Macbook Air','$2000');
let Air = new Product('Airport Pro','$100');
let Ipad = new Product('Ipad Mini','$500');
document.write(Air.name +': co gia la : ' +Air.price);