const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = ["surprise"];


function writeCards(names,eventName){
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        debugger;
    }
    return messages;
}

console.log(writeCards(names,eventName))

const int = 10
function countDown(int){
    let count = 0;
    while (int >= 0){
        console.log(int--)
    }
    return int
}



