const user: (string | number)[] = [1, "hc"]
// tuple uer
let tUser: [string, number, boolean]
// order matters in tuple
tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// does not happen
//newUser.push(true)






















export {}