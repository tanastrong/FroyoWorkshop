
const froyoOrder = prompt("Please enter you fryoy order, Seperate each order with a comma!")

const froyoArray = froyoOrder.split(",")

console.log(froyoOrder.split(","))

const froyoObject = {}

for(let i=0; i<froyoArray.length;i++){const froyoObject = {}
    if(froyoObject[froyoArray[i]]){
        
        froyoObject[froyoArray[i]] = froyoObject[froyoArray[i]] +1

    }else{
        froyoObject[froyoArray[i]] = 1
     }
}
console.table(froyoObject)  

