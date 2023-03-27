
const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1]; //ikinci sıradaki yani indeksi bir olan(card-body) i seçiyoruz
const clear=document.getElementById("clear-cars");


//UI objesini başlatma
const ui = new UI();

const storage = new Storage();

//Tüm eventleri ükleme
eventListeners();

function eventListeners() {

    form.addEventListener("submit", addCar);

    document.addEventListener("DOMContentLoaded", function () {  //safa başlar baişlamaz yapılması için "DOMContentLoaded"
        let cars = storage.getCarFromStorage();
        ui.loadAllCars(cars);
    });

    cardbody.addEventListener("click", deleteCar);
    
    clear.addEventListener("click",clearAllCars);
}

function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {

        ui.displayMessages("Tüm alanları doldurun...", "danger")

    }
    else {
        //yeni araç
        const newCar = new Car(title, price, url);

        //arayüze araç ekleme
        ui.addCarToUI(newCar);

        storage.addCarToStorage(newCar);

        ui.displayMessages("Araç başarıyla eklendi", "success")
    }

    ui.clearInputs(titleElement, urlElement, priceElement);  //girilen değerleri ekledikten sonra silmek için

    e.preventDefault();

}

function deleteCar(e){

    if(e.target.id==="delete-car"){
        ui.deleteCarFromUI(e.target);

        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)  //silme butonundan(deete-car) title td sine kadar ulaşma kısmı
    
    ui.displayMessages("Silme işlemi başarıyla gerçekleiti","success");
    }
}

function clearAllCars(){
    if(confirm("Tüm araçlar temizlenecek emin misiniz ?")){

        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
        
    }
  
}