// const User = {
//     name: "Abhi",
//     // email: "abhi@gmail.com",
//     // isActive: true,
//     isPaid: true
// }

// function createUser({name: string, isPaid: boolean}){}


let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

console.log(createCourse())


// create types
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// // create function with type and return type
// function createUser(user: User): User{
//     return {name: user.name, email: user.email, isActive: user.isActive}
// }

// console.log(createUser({name: "Abhi", email: "abhilashnair1994@gmail.com", isActive: true}))


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    // marked as optional
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
    credcardDetails: 23243423
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// use existing types to c
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let card: cardDetails =  {
    cardnumber: '123',
    cardDate: '01221994',
    cvv: 843
} 
console.log(card)

// myUser.email = "h@gmail.com"
// Cannot change as it is ReadOnly after initialization
// myUser._id = "asa"

console.log(myUser)







export {}