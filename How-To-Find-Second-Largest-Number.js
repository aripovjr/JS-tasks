const myArray = [10, 9, 9, 8, 8, 11, 8, 0, 9, 11]
function processData(myArray) {
    let max = -Infinity, result = -Infinity
    
    for(const value of myArray){
        const nr = Number(value)
        if(nr>max){
            [result, max] = [max, nr]
        }else if(nr < max && nr > result){
                result = nr
        }
    }
    console.log(result)
}
processData()
