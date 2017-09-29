/*
  given an amount, return the list of possibilities of making 'amount'
  from ascending 'coins'
*/
function makeChange(amount, coins, set) {
  if(amount === 0) {
    console.log(set)
    return
  }
  if(coins.length === 0) {
    return []
  }
  if(amount >= coins[coins.length-1]) {
    var workingSet =  set.slice()
    var biggestCoin = coins[coins.length-1]
    workingSet.push(biggestCoin) //use the biggest coin
    makeChange(amount-biggestCoin,coins.slice(), workingSet)
    coins.pop() // or don't
    makeChange(amount, coins, set)
  } else {
    coins.pop()
    makeChange(amount, coins, set)
  }
  return
}


makeChange(20, [1,2,5,10], [])
