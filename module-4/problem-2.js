const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}
const alluser=[]

const a=new Set(usersA.map(user=>user.id))
usersB.forEach((user)=>{
if(a.has(user.id)){
        alluser.push(user.id)
    }
})
    
console.log(alluser.length);


