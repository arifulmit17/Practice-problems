type student={id:Number,name:string,class:Number}

const functionwithgenobj=<T extends student>(value:T)=>{
    return {course:"next level",
        ...value
    }
}
const student1={
   id:1,name:"afgfd",class:3
}
const student2={
   id:1,name:"afgfd",class:1
}


const st1=functionwithgenobj(student1)
const st2=functionwithgenobj(student2)

console.log(st1);

console.log(st2);