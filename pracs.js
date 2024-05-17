function checkName(arr){
    const arrnew =arr.map(element=>element.length>5)
    console.log(arrnew);

}
checkName(["Luse","oscar","vee","Hipppopp"])

function merging(arr1,arr2){
    const b=arr1.concat(arr2).sort()
    
    console.log(b);
}
merging([5,4,3,1],[7,5,4,3]);

function names(name){
let newname=name.split('').reverse().join('')
    return newname
}
console.log(names("Tracy"));

function getduplicate(string){

    let newstring=[...new Set(string)]
    console.log(newstring.join(''));
}
getduplicate("assesment")
// let word="assesment"
// let newword=[...new Set(word)]
// console.log(newword.join(''));
const products= [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

  function sorting(products){
    return products.reduce((a,b)=>{
        const {category} =b;
        if(!a[category]){
            a[category]=[]
        }
        a[category].push(b);
        return a;
    });
  }

  const arrange=sorting(products);
  console.log(arrange);
  
  function studentsscore(students){
    return students.filter(student=>{
        const graded=student.scores.reduce((a,b)=>a+b)
        return graded>=85;
    }).map(student =>student.name);
}
const students= [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  console.log(studentsscore(students));