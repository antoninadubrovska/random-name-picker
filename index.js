// random name picker

let str = prompt(`Enter a list of names using following format: 'name1, name2, name3'`)
let names = ''

function percentGenerator() {
    
    names = str.split(',')
    // the names entered in prompt:
    // console.log(`The names you entered: ${names}`)
    let randomNumber = Math.floor(Math.random() * names.length )
    // the randomNumber:
    // console.log(randomNumber)
    return randomNumber
}

if (str === null) {
    console.log(`All the best!`)
}
else {   
    let randomName = percentGenerator()
    console.log(`${names[randomName]} is gonna pay for the meal today.`)
}
