const cart = ["shoes", "pants", "kurta"]

// Consumer part
const promise = createOrder(cart).then(function(orderId){
    console.log(orderId)
    return orderId;
})
.then(function(orderId) {
    return proceedToPayment(orderId)
})
.then(function(paymentInfo) {
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})
.then(function() {
    console.log("No matter what happens I will definitely be called!")
})
console.log(promise)

// Producer part
function validateCart(cart){
    return true
}

function createOrder(card){
    const pr = new Promise(function(resolve, reject){
        // createOrder
        // validateOrder
        // orderID is success
        if(!validateCart(card)){
            const err = new Error("Cart is not valid!")
            reject(err)
        }
        // Logic for createOrder
        const orderId = "12345"

        if(orderId){
            resolve(orderId)
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful")
    })
}