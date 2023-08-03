"use strict";
//abstract blue print
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // can implement function
    getReelTime() {
        //some complex calculation
        return 9;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        //abstract
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
    // can be overwritten by child class
    getReelTime() {
        //some complex calculation
        return 9;
    }
}
const abhis = new Instagram("test", "test", 3);
console.log(abhis.getReelTime());
abhis.getSepia();
