const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];
const count=surveyResponses.reduce((acc,survey)=>{
    if(!acc[survey]){
        acc[survey]=0
    }
    acc[survey]+=1
    return acc
},{})
console.log(count);