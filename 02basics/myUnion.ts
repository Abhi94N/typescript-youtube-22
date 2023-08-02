let score: number | string = 33
score = 44
console.log(typeof score)
score = "55"
console.log(score)
console.log(typeof score)




type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Abhi: User | Admin = {name: "abhi", id: 334}
console.log(Abhi)
console.log(typeof Abhi)

Abhi = {username: "hc", id: 334}
console.log(typeof Abhi)

// multiple passing of db id
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id} of ${typeof id}`);
    
// }


function getDbId(id: number | string){
    // check type of 
    if (typeof id === "string") {
        console.log(id.toLowerCase())
    } else {
        console.log(id * 2)
    }
  
}

getDbId(3)
getDbId("a")

// //array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]
console.log(data)
console.log(data2)
console.log(data3)

let pi:3.14 = 3.14
console.log(pi)


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// fails because of Union types
//seatAllotment = "crew"
console.log(seatAllotment)