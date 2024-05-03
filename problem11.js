// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products=[
    { id: 1, name: 'Product 1', category: 'Electronics' },
    { id: 2, name: 'Product 2', category: 'Clothing' },
    { id: 3, name: 'Product 3', category: 'Electronics' },
    { id: 4, name: 'Product 4', category: 'Books' }
]

function fliterProduct(products,criterion){
    return products.filter(products=>products.category===criterion)
}

let fliteredProduct = fliterProduct(products,'Electronics')
console.log(fliteredProduct)