const score: Array<number> = [1,2,23]
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

// typescript cannot define types
function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}
identityThree(3)

// can be same letter or word you are using
function identityFour<T>(val:T): T {
    return val
}

identityFour("hello")

interface Bottle{
    brand: string,
    type: number
}

//identityFour<Bottle>({})

//take array as an input
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]

}

//, to show that this is a generic syntax
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

let myproducts = [2,3,4,5,6]
console.log(getSearchProducts(myproducts))
console.log(getMoreSearchProducts(myproducts))


interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U  extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

console.log(anotherFunction(3, {'ssh': 4, 'connection':'test', 'username':'test', 'password':'test'}))

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

let s = new Sellable()

s.addToCart(1)
s.addToCart("sef")
console.log(s.cart)