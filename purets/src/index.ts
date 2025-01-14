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
    // protected is set private to any extensions
    protected _courseCount = 1
    readonly city: string = "Dehli"
    constructor(
        public email: string,
        public name: string,
        private userId: string
        
        ) {

    }

    //private methods
    private deleteToken() {
        console.log("delete method")
    }

    public get AppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        // for private number
        return this._courseCount
    }

    // no return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const abhi = new User("abhi@a.com","Abhi", "1")
console.log(abhi)
abhi.courseCount = 5
console.log(abhi.courseCount)
console.log(abhi.AppleEmail)
//cannot update readonly
//abhi.city = 's'
// cannot access private 
//console.log(abhi.city)

// class that extends User does not have access to private methods so you need to change to protected
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        // cannot 
        this._courseCount = 4
    }
}