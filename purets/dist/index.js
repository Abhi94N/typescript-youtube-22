"use strict";
// class User {
//     // set these values before constructor passes it
//     // public or unmarked is public otherwise its private and only available in the scope of the class
//     public email: string
//     public name: string
//     // can use #city to set it private - comes from JS
//     private readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
// alterative way of writing code
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Dehli";
    }
    //private methods
    deleteToken() {
        console.log("delete method");
    }
    get AppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        // for private number
        return this._courseCount;
    }
    // no return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const abhi = new User("abhi@a.com", "Abhi", "1");
console.log(abhi);
abhi.courseCount = 5;
console.log(abhi.courseCount);
console.log(abhi.AppleEmail);
//cannot update readonly
//abhi.city = 's'
// cannot access private 
//console.log(abhi.city)
