function Storage() {
    Storage.prototype.addCarToStorage = function (newCar) {

        let cars = this.getCarFromStorage();

        cars.push(newCar);

        localStorage.setItem("cars", JSON.stringify(cars));
    }

    Storage.prototype.getCarFromStorage = function () {

        let cars;

        if (localStorage.getItem("cars") === null) {
            cars = [];
        }
        else {
            cars = JSON.parse(localStorage.getItem("cars"));
        }
        return cars;
    }
}

Storage.prototype.deleteCarFromStorage=function(carTitle){
    let cars=this.getCarFromStorage();
    cars.forEach(function(car,index){                                //?
       cars.splice(index,1);                                         //index elemanını sileceğiz 1 dememiizin nedeni de kendisin silecek olmlamız
       localStorage.setItem("cars",JSON.stringify(cars));           //sildikten sonra tekrardan local storege kayıt ediyoruz
    });
}

Storage.prototype.clearAllCarsFromStorage=function(){
    localStorage.removeItem("cars");
}