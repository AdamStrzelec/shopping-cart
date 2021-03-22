export const saveProductInMemory = (product) => {
    let products = [];
    products = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    products.push(product);
    localStorage.setItem('shoppingCart', JSON.stringify(products));
}