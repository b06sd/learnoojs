Inheritance_Manger = {};

Inheritance_Manger.extend = function (subClass, baseClass){
    function inheritance(){}
    inheritance.prototype = baseClass.prototype;
    subClass.prototype = new inheritance();
    subClass.prototype.constructor = subClass;
    subClass.baseConstructor = baseClass;
    subClass.superClass = baseClass.prototype;
    
}

Inheritance_Manger.extend(SamsungS6, Phone);
Inheritance_Manger.extend(Iphone,Phone);