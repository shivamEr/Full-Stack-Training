// Q. 
let menu = [
    "roti", "rice", "eggrice", "paneer", "dal", "egg-curry", "chicken",
    "chicken rice", "matar paneer", "dal-makhni",
]


// Q. filter out veg and non-veg items.
let veg = menu.filter(item =>{
    return  !(item.toLowerCase().includes("chicken") || item.toLowerCase().includes("egg"));
})
let nonveg = menu.filter(item =>{
    return  (item.toLowerCase().includes("chicken") || item.toLowerCase().includes("egg"));
})
console.log("Veg", veg);
console.log("NOn veg", nonveg);


let products = [
    {
        name: "product 1 name",
        category: "wearable",
        color: ["red", "white"]
    },
    {
        name: "product 2 name",
        category: "playable",
        color: ["black", "silver"]
    },
    {
        name: "product 3 name",
        category: "wearable",
        color: ["blue", "white"]
    },
    {
        name: "product 4 name",
        category: "playable",
        color: ["white", "gray"]
    },
    {
        name: "product 5 name",
        category: "playable",
        color: ["gold", "black"]
    },
    {
        name: "product 6 name",
        category: "wearable",
        color: ["orange", "black"]
    },
    {
        name: "product 7 name",
        category: "wearable",
        color: ["purple", "pink"]
    }
];

// Q. Filter out all the products which arre white & wearable
let result = products.filter(product => product.category === "wearable" && product.color.includes("white"));
// console.log(result);