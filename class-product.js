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
document.write(Iphone.name +': co gia la : ' +Iphone.price+"<br>");
let Mac = new Product('Macbook Air','$2000');
document.write(Mac.name +': co gia la : ' +Mac.price+"<br>");
let Air = new Product('Airport Pro','$100');
document.write(Air.name +': co gia la : ' +Air.price+"<br>");
let Ipad = new Product('Ipad Mini','$500');
document.write(Ipad.name +': co gia la : ' +Ipad.price);
