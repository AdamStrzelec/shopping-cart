export const isProductInCart = (slug, productsInCart) => {
    for(let i=0; i<productsInCart.length; i++){
        if(productsInCart[i].slug===slug){
            return true;
        }       
    }
    return false;
}