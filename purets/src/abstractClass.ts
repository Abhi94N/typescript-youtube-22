//abstract blue print
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // class that extends Takephoto needs to implemnt method
    abstract getSepia(): void 
    
    // can implement function
    getReelTime(): number {
        //some complex calculation
        return 9
    }
}



class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        //abstract
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
    // can be overwritten by child class
    getReelTime(): number {
        //some complex calculation
        return 9
    }
    
}

const abhis = new Instagram("test", "test", 3)
console.log(abhis.getReelTime())
abhis.getSepia()