// const number=Array(5,3);
// const numbers=Array.of(5,8);
// console.log(number,numbers);

// const listitem=document.querySelectorAll('list');
// console.log(listitem);

// const arrayListitems=Array.from(listitem);
// console.log(arrayListitems);

const hobbies=['sports','playing cricket','reading'];
// console.log(hobbies);
// hobbies.push('reading');
// console.log(hobbies);
// hobbies.unshift('coding');
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);

// hobbies.splice(1,0,'good food');
// console.log(hobbies);

// const remove=hobbies.splice(1,1);
// console.log(hobbies);

// const result=[1,4,6,34,66,78,90];
// console.log(result.slice(2,5));

// const arrayconcat=result.concat(hobbies);
// console.log(arrayconcat);

// console.log(result.indexOf(66));

// const persons=[{name:'Max'},{name:'Mic'}];
// console.log(persons.indexOf({name:'Max'}));

// const max=persons.find((person,idx,persons)=>{return person.name==='Max'});
// console.log(max);

// const maxIndex=persons.findIndex((person,idx,persons)=>{return person.name==='Max'});
// console.log(maxIndex);

// max.name='Will';
// console.log(max,persons);

const prices=[34,56,45,67,78,99,80,79];
console.log(prices);
const tax=18;
//const taxAdjustedPrices=[];

// prices.forEach((price,idx)=>{return taxAdjustedPrices.push(price*(1+tax/100))});
// console.log(taxAdjustedPrices);

// const taxAdjustedPrices=prices.map((price,idx)=>{return {index:idx,price:price*(1+tax/100)}});
// console.log(taxAdjustedPrices);

// const sorted=prices.sort((a,b)=>{
//     if (a>b){
//         return 1;
//     }else if(a===b){
//         return 0;
//     }else{
//         return -1;
//     }
// });
// console.log(sorted);

// const reverse=sorted.reverse();
// console.log(prices);

// const filter=prices.filter((price)=>{return price>60});
// console.log(filter);

// const sum=prices.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

console.log(Math.min(...prices));