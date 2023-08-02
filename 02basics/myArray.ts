// does not work
// const superHeros = []
// superHeros.push('hi')
// also returns never
// const superHeros: [] = []

const superHeros: string[] = []
superHeros.push('spiderMan')
console.log(superHeros)

// array  example
//const heroPower: number[] = []


// alternate
const heroPower: Array<number> = []

heroPower.push(2)
console.log(heroPower)

// type User = {
//     name: string
//     isActive: boolean
// }

// //const allUsers: User[] = []
// const allUsers: Array<User> = []
// allUsers.push({name: "", isActive:true})
// console.log(allUsers)

// number of numbers
const MLModels: number[][] = [
    [255, 255, 255],
    []
]


// superHeros.push("spiderman")
// heroPower.push(2)

// allUsers.push({name: "", isActive: true})