"use strict";
// const User = {
//     name: "Abhi",
//     // email: "abhi@gmail.com",
//     // isActive: true,
//     isPaid: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function createUser({name: string, isPaid: boolean}){}
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
// createUser(newUser)
function createCourse() {
    return { name: "reactjs", price: 399 };
}
console.log(createCourse());
var myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
    credcardDetails: 23243423
};
// myUser.email = "h@gmail.com"
// Cannot change as it is ReadOnly after initialization
// myUser._id = "asa"
console.log(myUser);
