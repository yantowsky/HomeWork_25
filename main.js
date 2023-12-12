class Person {
    constructor(name, sex) {
        this.name = name;
        this.age = sex;
    }
}

class Apartment {
    residents = [];

    addResident(resident) {
        this.residents.push(resident);
    }
}

class House {
    apartments = [];

    constructor(maxNumApartments) {
        this.maxNumApartments = maxNumApartments;
    }

    addApartment(apartment) {
        this.apartments.length >= this.maxNumApartments ? console.log("Перевищена максимальну кількість квартир") : this.apartments.push(apartment);
    }
}

const personOne = new Person("Serge", "male");
const personTwo = new Person("Abigail", "female");
const personThree = new Person("Eugene", "male");

const apartmentOne = new Apartment();
const apartmentTwo = new Apartment();
const apartmentThree = new Apartment();

apartmentOne.addResident(personOne);
apartmentTwo.addResident(personTwo);
apartmentThree.addResident(personThree);

const houseOne = new House(2);

console.log(houseOne);

houseOne.addApartment(apartmentOne);
houseOne.addApartment(apartmentTwo);
houseOne.addApartment(apartmentThree);