localStorage.setItem('NAME', 'Rakibul Islam Rakib')
// localStorage.getItem('mobile')
// localStorage.removeItem()
// localStorage.clear()

const mobile = localStorage.getItem('mobile');
console.log(mobile)

// object store & get on local storage
localStorage.setItem('persons', JSON.stringify({ name: 'rakib', age: 24, height: 5.7 }))
const persons = localStorage.getItem('persons');
const personsObject = JSON.parse(persons)
console.log(personsObject.name)

// store array of object & get
localStorage.setItem('teachers', JSON.stringify([{ name: 'rahim', age: 44 }, { name: 'hasnat', age: 24 }]))
const arrayOfObject = JSON.parse(localStorage.getItem('teachers'))
console.log(arrayOfObject)
console.log(arrayOfObject[0])
