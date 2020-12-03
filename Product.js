class Product {
    constructor(name, type, price, picture) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._picture = picture;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get picture() {
        return this._picture;
    }

    set picture(value) {
        this._picture = value;
    }
    addProduct(value) {
        this._name.push(value);
    }
    editProduct(index) {
        this._name.(index);
    }
    deleteProduct(index) {
        this._name.pop(index);
    }
}
