const froyoOrder = prompt("Please enter you fryoy order, Seperate each order with a comma!")

const froyoArray = froyoOrder.split(",")

const froyoFunction = (arr) => {
    const froyoObject = {};
    for (let i=0; i < arr.length; i++){
        if(froyoObject[arr[i]]){
            froyoObject[arr[i]] =  froyoObject[arr[i]]+1
        }else{
            froyoObject[arr[i]] = 1;
        }
    }
    return froyoObject;
};
console.table(froyoFunction(froyoArray))
