function nonConstructibleChange(coins) {
    coins.sort((a,b) => a - b);
  
    let min = 1;
    for(let coin of coins){
        //compare min to coin
        if(coin > min) return min;
        
        //every thing up to coin can be built which is why we add it to min
        min += coin;
    }  
    return min;
}
  
  //merge or quick sort is where O(nlogn) comes from
  

  console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
  console.log(nonConstructibleChange([1, 1, 1, 1, 1]))
  console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))
  console.log(nonConstructibleChange([]))