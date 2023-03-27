
function UI() {





}

UI.prototype.addCarToUI = function (newCar) {


    const carList = document.getElementById("cars");

    carList.innerHTML += `
   <tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
   </tr>  
   
   `
}

//veriler girildikten sonra inputtan silme
UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

//alert mesaj kutusu oluşturduk
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");    //querySelector direkt olarak ilk .card-body seçiyor.

    //alert Divi Oluşturma
    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {                                  //Belli bir Süre Sonra divin yok olmasını sağlıyor                                            
        div.remove();
    }, 2000)

}

UI.prototype.loadAllCars = function (cars) {
    const carList = document.getElementById("cars");    //tbody de carların oluştuğu kısımın ıd si

    cars.forEach(function (car) {
        carList.innerHTML += `
<tr>
     <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
     <td>${car.title}</td>
     <td>${car.price}</td>
     <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
</tr>  

`
    }); 

}

UI.prototype.deleteCarFromUI= function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllCarsFromUI=function(){
    const carList=document.getElementById("cars");
    
    //carList.inner-HTML="";

 while(carList.firstElementChild !== null){
    carList.firstElementChild.remove();
 }
}