const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const group=sales.reduce((acc,sale)=>{
    const {category,price,quantity}=sale
    if(!acc[category]){
        acc[category]={
        totalrev:0,
        totalquant:0
    }

    }
    
    acc[category].totalrev+=quantity*price
    acc[category].totalquant+=quantity
    return acc
},{})
console.log(group);