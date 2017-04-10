class Iphone extends Phone{
    constructor(os){
        this.os = os;
    }

    getIphoneOs(){
        return this.os;
    }

    iPhoneS7 = function(internalMemory, isSingleSIM, iemiNumber, os){
    iPhoneS7.baseContructor.call(internalMemory, isSingleSIM, iemiNumber);
    this.os = os;

    iPhoneS7.prototype = {
        getPhoneIsSingleSim: function() {
            return 'No';
        }
}
}
}