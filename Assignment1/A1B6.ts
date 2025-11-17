const formatValue=(value1: string | number | boolean ) : string=>{
    if(typeof value1==="string"){
        return value1.toUpperCase()+';'
    }else if(typeof value1==="number"){
        return value1*10+';'
    }else if(typeof value1==="boolean"){
        return value1=!value1+';'
    }

}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));
// ******************************************************

function getLength<T>(value2: T ): string{
    if(typeof value2==="string"){
        return value2.length+';'
    }else {
        return value2.length+';'
    }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// ******************************************************
class Person{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    
    getDetails(): string{
        return "'"+`Name: ${this.name}, Age: ${this.age}`+"'"+";"
    }

}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
// ******************************************************
type book={
   title: string,
   rating: number
}


function filterByRating(value4:book[]):book[]{
   return value4.filter(book=>book.rating >= 4.0 && book.rating<=5.0)
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));



// ******************************************************
const user2:object[]=[]

const filterActiveUsers=(value5:object[])=>{
   value5.map((user)=>{
    if(user.isActive===true){
        user2.push(user)
        
        
    }
   })
   return user2
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));

// ******************************************************


interface Book{
    title :string,
    author :string,
    publishedYear:number,
    isAvailable:boolean,
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails=(book:Book)=>{
   const text=`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
  console.log(text); 
}

printBookDetails(myBook);

// ******************************************************
type arrayType=(string|number)[]
function getUniqueValues(array1: arrayType, array2: arrayType) : arrayType{
   const array3=[...array1]
   for (let i of array2) {
    console.log("i=",i);
    for(let j of array3){
         console.log("j=",j);
        if(j!=i){
            array3.push(i)
        
     }

    }
     
}
return array3
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// ******************************************************
type product={
    name: string,
    price: number,
    quantity: number,
    discount?: number
}



function calculateTotalPrice(product:product[]){
   const price=product.reduce((total,item)=>{
    if(item?.discount){
        return total+ item.price*item.quantity-((item?.discount)/100*item.price*item.quantity)

    }else{
        return total+ item.price*item.quantity
    }
     
   },0)
   return price
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));