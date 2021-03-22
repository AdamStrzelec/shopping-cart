export const getProductsInCartTotalPrice = (products) => {
    return products.reduce((acc, product) => {
        return acc + parseInt(product.price)
    }, 0)
}