class Phone{
    constructor(internalMemory, isSingleSIM, iemiNumber){
        this.internalMemory = internalMemory;
        this.isSingleSIM = isSingleSIM;
        this.iemiNumber = iemiNumber;
    }
    
    getPhoneInternalMemory(){
        return this.internalMemory;
    }

    getPhoneIsSingleSim(){
        return this.isSingleSIM;
    }

    getPhoneIemiNumber(){
        return this.iemiNumber;
    }
}