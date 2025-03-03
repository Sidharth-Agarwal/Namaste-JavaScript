const card = ["shoes", "pants", "kurta"]

// craeteOrder(cart, function (orderId) {
//     processToPayment(orderId);
// })

// const promise = createOder(cart);
// promise.then(function (orderId) {
//     processToPayment(orderId);
// })

const GITHUB_API = "https://api.github.com/users/sidharth-agarwal"
const user = fetch(GITHUB_API)
console.log(user);
user.then(function(data) {
    console.log(data);
})

// Promise Chaining
createOrder(card).then(function(orderId){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    return showOrderSummger(paymentInfo);
}).then(function (paymentInfo) {
    return updateWallet(paymentInfo);
})