
let prices = [5, 10, 15, 20, 25];

// looping elements from the starting of the list

for(let i = 0; i < prices.length; i +=1){
    console.log(prices[i])
}

// looping elements from the starting of the list

for (let i = prices.length - 1; i >=0; i-=1){
    console.log(prices[i])
}


for (let price of prices){
    console.log(price)
}