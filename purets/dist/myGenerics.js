"use strict";
const score = [1, 2, 23];
const names = [];
function identityOne(val) {
    return val;
}
// typescript cannot define types
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
// can be same letter or word you are using
function identityFour(val) {
    return val;
}
identityFour("hello");
//identityFour<Bottle>({})
//take array as an input
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//, to show that this is a generic syntax
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
let myproducts = [2, 3, 4, 5, 6];
console.log(getSearchProducts(myproducts));
console.log(getMoreSearchProducts(myproducts));
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
console.log(anotherFunction(3, { 'ssh': 4, 'connection': 'test', 'username': 'test', 'password': 'test' }));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
let s = new Sellable();
s.addToCart(1);
s.addToCart("sef");
console.log(s.cart);
