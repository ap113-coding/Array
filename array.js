let fruits = ['apple', 'ornage', 'pine apple', 'mango']
console.log(fruits)
console.log(fruits[1])
fruits[1]='banana'
console.log(fruits);
fruits.push('cherry')
console.log(fruits)
fruits.splice(fruits.indexOf('pine apple'),1)
console.log(fruits)
fruits.unshift('mango')
console.log(fruits)
// fruits.splice(0, 4, "lemon")
// console.log(fruits)
console.log(fruits.length);
console.log(fruits);
fruits.splice(fruits.indexOf('grapes'), 3)
console.log(fruits);
fruits.push("grapes")
console.log(fruits);
