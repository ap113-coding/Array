// let fruits = ['apple', 'ornage', 'pine apple', 'mango']
// console.log(fruits)
// console.log(fruits[1])
// fruits[1]='banana'
// console.log(fruits);
// fruits.push('cherry')
// console.log(fruits)
// fruits.splice(fruits.indexOf('pine apple'),1)
// console.log(fruits)
// fruits.unshift('mango')
// console.log(fruits)
// // fruits.splice(0, 4, "lemon")
// // console.log(fruits)
// console.log(fruits.length);
// console.log(fruits);
// fruits.splice(fruits.indexOf('grapes'), 3)
// console.log(fruits);
// fruits.push("grapes")
// console.log(fruits);



let array_number = [1,2,3,4,5]
// console.log(array_number.length);
// console.log(array_number.push(6));
// console.log(array_number);

// array_number.pop(); //pop only used remove last element
// console.log(array_number);

// array_number.pop();
// console.log(array_number);

// array_number.push(5,6);
// console.log(array_number);


array_number.push(6,7,8,9,10);
console.log(array_number);

// // 6:- after position, 0:- how many delete element  12:- add new element
array_number.splice(5,0,12);
console.log(array_number);




let items = [
    'a','b','c','d','e'
]
items.splice(2,1,'x');
console.log(items);

items.slice(1,2);
console.log(items);

