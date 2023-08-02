interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

// reopening of interface
interface User {
    githubToken: string
}
//inheritence
// can extend more than one interface
//similar to type except uses extends instead &
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrial: () => {
    return "trial started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    if (name == 'hitesh10') {
        console.log(name)
        return off
    }
    return 10

}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33

console.log(hitesh.startTrial())
console.log(hitesh.getCoupon("hitesh10", 20))