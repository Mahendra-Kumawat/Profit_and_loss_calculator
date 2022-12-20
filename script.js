console.log("welcome to the loss and profit calculator")

const initialPrice = document.querySelector("#initial-price");
const Quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const button = document.querySelector(".btn");
const output = document.querySelector(".output");
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")

console.log(error1)

function profit_and_loss(price,quan,cprice){
    if (price>cprice){
        let loss=(price-cprice)*quan;
        let lossPersentage=(loss/price)*100;
        showmessage(`Hey, the loss is ${loss} Rupees and the loss percent is ${lossPersentage}%`);
    }else if (cprice>price){
        let profit=(cprice-price)*quan;
        let profitPersentage=(profit/price)*100;
        showmessage(`Hey, the profit is ${profit} Rupees and the profit percent is ${profitPersentage}%`);
    }else{
        showmessage("All is Well");
    }
}


function showmessage(msg){
    output.innerText = msg
}


button.addEventListener("click" , () =>{
    console.log(Quantity.value)
    if(initialPrice.value == 0){
        error1.innerText = `pls enter the initial price`
        // console.log(error1)
        clear_error(error1 , initialPrice)
    }
    else if(Quantity.value == 0){
        console.log(Quantity.value)
        error2.innerText = `pls Enter the quantity`
        clear_error(error2 , Quantity)
    }
    
    else if(currentPrice.value == 0){
        error3.innerText = `pls Enter the current price`
        clear_error(error3 , currentPrice)
    }
    else{
        let price = initialPrice.value
        let quan  =  Quantity.value
        let cprice = currentPrice.value
        console.log(price , quan , cprice)
    
        profit_and_loss(price , quan , cprice)

        clear_output()

    }

})


function clear_error(err , p){
    p.addEventListener("click" , () =>{
        err.innerText = ""
    })
}

function clear_output(){
    setTimeout(() => {
        output.innerText = ""
        initialPrice.value  = ""
        Quantity.value = ""
        currentPrice.value = ""
    }, 10000);
}