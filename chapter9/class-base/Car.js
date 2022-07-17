class Car{
    constructor(brand,price,year,features){
        this.brand = brand;
        this.price = price;
        this.year = year; 
        this.features = features
    }
    showProperty(property){
        if(this.features[property]){
            console.log(this.features[property])
        }else{
            console.error(`this ${property} is not defined`);
        }
    }
    showPrice(){
        console.log(this.price);
    };
    showConfig(){
        console.log(this.features)
    };
    set rating(rate){
        this._rating = rate;
    };
    get rating(){
        console.log(this._rating);
    };

}
