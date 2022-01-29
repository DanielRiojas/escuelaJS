const cupons = [
    {
        code: "cupon1",
        discount: 25
    },
    {
        code: "cupon2",
        discount: 50
    },
    {
        code: "cupon3",
        discount: 75
    }
];

function calcularPrecioConDescuento(precio, descuento){
    return (precio*(100-descuento)/100);
}

//Conexión con HTML
function onClickButtonPriceDiscount(){
    const price = Number(document.getElementById("InputPrice").value);
    const cuponCode = document.getElementById("InputCupon").value;

    const isCouponValueValid = function (coupon) {
        return coupon.code === cuponCode;
    };

    const UsrCode = cupons.find(isCouponValueValid);

    if (!UsrCode) {
        alert("El cupón " + cuponCode + " no es válido");
    }
    else {
        const discountPrice = calcularPrecioConDescuento(price, UsrCode.discount);

        document.getElementById("ResultP").innerText = "El precio con descuento es $"+ discountPrice;
    }

    
}