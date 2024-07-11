let str = "Hello guys i hope your are doing good"

//Método includes()
//o método include verifica se a string tem determinado caractere

let check = str.includes("hope")
console.log(check)

// Método indexof retorna a posição de um valor especificado
let index = str.indexOf("doing")
console.log(index)

//Método StratsWith determina se uma cadeia de caracteres
//começa com um caractere especifico
console.log(str.startsWith("Hello"))

//Método slice extrai uma parte de uma string e retorna
// e retorna a parte extraída na nova string
let newStr = str.slice(0, 5)
console.log(newStr)

//Método toLowerCase converta a cadeia de caracteres em minúsculas
let x = "Ozéas Luiz "
console.log(x.toLowerCase())

//Método toUpperCase converta a cadeia de caracteres em minúsculas
console.log(x.toUpperCase())

//Método trim Remove os espaços em branco de ambos os lados.
let searchText = "     salesforce lwc     "
console.log(searchText.trim())

let obj = {
    name: "Salesforce",
    age: 38,
    dob:"01/05/1986"
}
//Método Object.keys() retorna as chaves do objeto
console.log(Object.keys(obj))

//Método Object.values() retorna os valores do objeto
console.log(Object.values(obj))

//Método JSON.stringify() converte um para string
let str1 = JSON.stringify(obj)
console.log(str)

//JSON.parse() converte o objeto para o padrão que estava
console.log(JSON.parse(str1))

// Array Méthods
// map(), every(), filter(), some(), sort(), reduce(), forEach()

// syntax
//arr. methoName(function(currentItem, index, actualArray){

//})

//Promise 

// Modules import and export
import {PI, add} from './utils'
console.log(PI)
console.log(add(2,3))

//QuerySelector
//Events
//Arrow function
//setTimeout vs steInterval



