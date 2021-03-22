export const removeProductCartFromMemory = (slug) => {
    let products = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    for(let i=0; i<products.length; i++){
        if(products[i].slug===slug){
            products.splice(i, 1);
        }
    }
    localStorage.setItem('shoppingCart', JSON.stringify(products));
}