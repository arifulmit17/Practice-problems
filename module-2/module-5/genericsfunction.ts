const createArrayWithString=(value: string)=>[value]
const createArrayWithNumber=(value: number)=>[value]
const createArrayWithUserObj=(value: {id:number ; name:string})=>[value]
const createArrayWithGeneric=<T>(value: T)=>[value]

const createArrayWithGenericTuple=<X,Y>(param1:X,param2:Y)=>[param1,param2]

const arrst=createArrayWithString('apple')
const arrn=createArrayWithNumber(10)
const arrobj=createArrayWithGeneric({id:1,name:"anb"})
const arrt= createArrayWithGenericTuple('avf',1)
const arrt2= createArrayWithGenericTuple('avf',{id:1,name:"anb"})
