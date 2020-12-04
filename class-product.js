class Product {
    constructor(name, price, picture) {
        // Thang nay vo dung chi lam duoc 1 viec thoi,nhung no lai chu;
        this._name = name;
        this._price = price;
        this._picture = picture;
    }

    get name() {
        // Neu co nhieu quan thi se lam duoc nhieu viec cung luc;
        return this._name;
    }

    set name(value) {
        // Chi lam duoc 1 viec la gan gia tri
        this._name = value;
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
}
// Khoi tao var = new doi tuong(truyen doi so);
let Iphone = new Product('Iphone 12','$1000',
    "<img src=\"iphone-2020-600x600.jpg\" height=\"50\" width=\"50\"/>");
// In ra doi tuong this.property + ...);
// document.write(Iphone.name + Iphone.price + Iphone.picture + "<br>");
let Mac = new Product('Macbook Air','$2000',
    "<img src=\"vi-vn-macbook-air-2017.jpg\" height=\"50\" width=\"50\"/>");
// document.write(Mac.name + Mac.price + Mac.picture + "<br>");
let Air = new Product('Airport Pro','$100',
    "<img src=\"tai-nghe-bluetooth-airpods-2-wireless-charge-mrxj2-3-1-org.jpg\" height=\"50\" width=\"50\"/>");
// document.write(Air.name + Air.price + Air.picture + "<br>");
let Ipad = new Product('Ipad Mini','$500',
    "<img src=\"ipad-air-4-wifi-cellular-64gb-2020-121020-0206316.jpg\" height=\"50\" width=\"50\"/>");
// document.write(Ipad.name + Ipad.price + Ipad.picture );
let Apwatch = new Product('Apple Watch','$500',
    "<img src=\"apple-watch-s6-lte-44mm-vien-thep-day-thep-240920-10531512.jpg\" height=\"50\" width=\"50\"/>");
// document.write(Apwatch.name + Apwatch.price + Apwatch.picture );
