const shopcart = [
    {
        itemn:"item1",
        price:599,
    },
    {
        itemn:"item2",
        price:999,
    },
    {
        itemn:"item3",
        price:799,
    },
    {
        itemn:"item4",
        price:3999,
    },
    {
        itemn:"item5",
        price:1799,
    },
]


const newpay = shopcart.reduce((accumulator,item)=>accumulator+item.price,0)
console.log(newpay);
