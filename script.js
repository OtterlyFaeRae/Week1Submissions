// Activity 1
const activity1 = (num) => {
    if (num % 3 == 0 && num % 5 != 0) {
        console.log("fizz")
    } else if (num % 5 == 0 && num % 3 != 0) {
        console.log("buzz")
    } else if (num % 5 == 0 && num % 3 == 0) {
        console.log("fizz buzz")
    } else {
        console.log(num)
    }
}
activity1(26)

// Activity 2
const activity2 = (num) => {
    for(let i = 0; i < 6; i++){
        let num = Math.ceil(Math.random()*30)
        if (num % 7 == 0){
            console.log(`${num} is divisible by 7.`)
        } else {
            console.log(`${num} is not divisible by 7.`)
        }
    }
}


// Activity 3
for(i=0; i<6; i++) {
    console.log(Math.ceil(Math.random()*50))
}

// Activity 4
for(let i = 0; i<=9; i++){
    console.log(i)
}
for(let i = 9; i>=0; i--){
    console.log(i)
}
for(let i = 1; i<= 32; i*= 2){
    console.log(i)
}

// Activity 5
const pet = {
    name: "ghostie",
    typeOfPet: "cat",
    age: 6,
    colour: "black",
    purr: false,
    eat() {
        return `${this.name} is eating.`
    },
    drink(){
        return `${this.name} is drinking.`
    },
    cuddle(){
        purr = true
        return `${name} is full of bees!`
    },
    biscuits(){
        if(purr) {
            console.log(`${name} is making biscuits! Since she's full of bees, they're Honey Biscuits. You are blessed.`)
        } else if (purr === false) {
            console.log(`${name} is making biscuits!`)
        }
    }
}
console.log(pet.drink())
console.log(pet.eat())
console.log(pet.biscuits())
console.log(pet.purr())
console.log(pet.biscuits())

// Activity 6
password = "wafflesandsyrup"
if (password.length < 8) {
    console.log(`Password has less than 8 characters.`)
} else {
    console.log(`${password}`)
}

// Activity 7
let num = 3
if (num % 3 == 0 || num % 5 == 0) {
    console.log(`${num} is divisible by 3 or 5.`)
} else {
    console.log(`${num} is not divisible by 3 or 5.`)
}