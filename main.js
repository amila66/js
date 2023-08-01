person={
    id:'001',
    name:'nimal',
    address:'colombo',
    salary:'20000',
};
console.log(person);

console.log('============================');
console.log(person.address);

console.log('============================');
console.log(person['name']);

function setData(brand, color, type){
    //let var const
    let vehicle= {
        brand:brand,
        color:color,
        type:type,
        calculate: function (){
            return 25000/2;
        }
    }
    return vehicle;
};
tempVehicle=setData('BMW','black','Sport');
console.log(tempVehicle);
console.log(tempVehicle.calculate());
