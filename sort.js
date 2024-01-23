console.log("Hello Soham");
const products = [{productId:1, productName:"p1", price:200},
{productId:1, productName:"p2", price:130},
{productId:1, productName:"p3", price:250},
{productId:1, productName:"p4", price:100},

]
//cloning using Slice; 
// const LowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// })
// we clone array here , because the sort method change the sequence of Original Array and;
// we want to preserve the sequence;
//cloning using Spread operator
const LowToHigh = [...products].sort((a,b)=>{
    return a.price-b.price
})
console.log(products);
console.log(LowToHigh);