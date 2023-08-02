//infer number for parameter and return type
function addTwo(num: number): number{
     return num + 2
     //return "hello"
}

addTwo(5)

function getUpper(val: string){
    return val.toUpperCase()
}

console.log(getUpper('4'))

function signUpUser(name: string, email: string, isPaid: boolean){}

// Arrow functions also include default types
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    if (isPaid === void 0) {isPaid = false; }
}

let myValue = addTwo(5)
getUpper("hitesh")

signUpUser("hitesh", "hitesh@lco.dev", false)
loginUser("h", "h@h.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

// arrow functions
const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

// void doesn't return anything
function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}
// throws the error
// need to reach an endpoint
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}

consoleError("the error")
//handleError("the error")


export {}