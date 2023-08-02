const enum SeatChoice {
    // start value is aisle
    AISLE = "aisle",
    // start with number of choice
    MIDDLE = 3,
    // increments after middle
    WINDOW,
    // increments after window
    FOURTH
}

const hcSeat = SeatChoice.AISLE


console.log(hcSeat)