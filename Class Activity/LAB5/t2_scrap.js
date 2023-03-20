class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
    get cnam(){
        return this.carname;
    }
    set cnam(x){
        this.carname = x;
    }
}

let myCar2 = new Car("Ford");
document.getElementById("demo").innerHTML = myCar.cnam;

class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return rhis.present() + 'it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();