/**
 * Created by ASUS on 08.11.2017.
 */
var product =

{
    "matresse": [
    {
        name:"memory",
        productID: 1,
        softy:["medium","hard","soft"],
        size: [80, 90, 120, 140, 160, 180, 200],
    },

    {
        name:"elastic",
        productID: 2,
        softy:["medium","hard","soft"],
        size: [80, 90, 120, 140, 160, 180, 200],
    },

    {
        name:"orthopedic",
        productID: 3,
        softy:["medium","hard","soft"],
        size: [80, 90, 120, 140, 160, 180, 200],
    }
]
};

// product=JSON.stringify(product);
product=JSON.parse(product);


console.log(product);
// выведет весь массив
console.log(product.name);
// выведет имя


