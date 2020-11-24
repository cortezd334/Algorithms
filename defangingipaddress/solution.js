const defanging = (address) => {
    let updatedAddress = address.split('.').join('[.]')
    return updatedAddress
};

console.log(defanging('1.1.1.1'))
console.log(defanging('6.3.8.9'))
console.log(defanging('13.98.3.78'))
console.log(defanging('255.100.50.0'))

const sol2 = (address) => {
    let newAddress = ''
    for(let i = 0; i < address.length; i++){
        if(address[i] == '.'){
            newAddress += '[.]'
        }
        else{
            newAddress += address[i]
        }
    }
    return newAddress
}

console.log(sol2('1.1.1.1'))
console.log(sol2('6.3.8.9'))
console.log(sol2('13.98.3.78'))
console.log(sol2('255.100.50.0'))

