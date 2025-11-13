const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const look=postsArray.reduce((acc,post)=>{
   if(!acc[post.id]){
     acc[post.id]=post
   }
   return acc
},{})

console.log(look);