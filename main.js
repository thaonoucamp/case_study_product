let product = [];
product.push(Iphone);
product.push(Mac);
product.push(Air);
product.push(Ipad);
product.push(Apwatch);

showAllProduct();
// Ham hien thi danh sach spham;
function showAllProduct() {
    // Tao bien chua noi dung;
    let content = "";
    for (let i = 0; i < product.length; i++) {
        // Cho 1 dong chua noi dung vao vong lap;
        content += ' <tr>\n' +
            '        <td>'+(i+1)+'</td>\n' +
            '        <td>'+product[i]._name+'</td>\n' +
            '        <td><button style="width: 50px">'+product[i]._price+'</button></td>\n' +
            '        <td>'+product[i]._picture+'</td>\n' +
            '        <td><button class="edit" onclick="editProduct('+i+')">Edit</button></td>\n' +
            '        <td><button class="delete" onclick="deleteProduct('+i+')">Delete</button></td>\n' +
            '    </tr>';
    }
    // Gan noi dung bang id(danh sach) vao DOM;
    document.getElementById("list").innerHTML = content;
}
function addNewProduct() {
    // B1: Lay ten spham tu input;
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newPicture = document.getElementById("newPicture").value;
    // B2: Them spham moi vao danh sach;
    product.push({
        _name: newName,
        _price : '$'+newPrice,
        _picture:'<img src="'+newPicture+'" height="50" width="50"/>'
    });
    // B3: Hien thi danh sach moi;
    showAllProduct("newProduct");
    // B4: Tra lai gia ban dau cho input;
    document.getElementById("newName").value = "";
    document.getElementById("newPrice").value = "";
    document.getElementById("newPicture").value = "";
}
function editProduct(index) {
    // B1: Truy cap den vi tri san pham can sua;
    let newName = prompt("Hay sua lai san pham :",product[index].name);
    // B2: Gan gia tri moi cho vi tri;
    product[index].name = newName;
    // B3: Hien thi lai danh sach;
    showAllProduct();
}
function deleteProduct(index) {
    // B1: Tim vi tri spham can xoa;
    product.splice(index,1);
    // B2: Hien thi lai danh sach;
    showAllProduct();
}