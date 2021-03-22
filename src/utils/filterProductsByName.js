export const filterProductsByName = (productsArray, name) => {
    return productsArray.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}