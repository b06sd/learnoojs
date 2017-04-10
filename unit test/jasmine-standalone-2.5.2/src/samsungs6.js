class SamsungS6 extends Phone{
    constructor(color, price, os){
        this.color =color;
        this.price = price;
        this.os = os;
    }
    
    
    getSamsungS6Color(){
        return this.color;
    }

    getSamsungS6Price(){
        return this.price;
    }

    getSamsungS6OperatingSystem(){
        return this.os;
    }

SamsungS6NewPhone = new SamsungS6('Blue', '$450', 'Android');
SamsungS6NewPhone

}