//no esta funcionando de la manera esperada
//ya que cuando volvemos a correr la funcion no esta agregando el nuevo valor
// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }          

// moneyBox(5);
// moneyBox(10);

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}          

let myMoneyBox = moneyBox();

myMoneyBox(4); //en la primera ejecución el valor es de 4
myMoneyBox(6); //en la segunda ejecución JavaScript recuerda el valor asignado anteriormente y los suma con el nuevo 10
myMoneyBox(10); //igual a lo anterior. por eso en el tercer llamado da 20, como es esperado. 20