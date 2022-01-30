// 1. Заменить "?" на "!"
function fromQuestionToExclamation(arr) {
    let z=arr.map(words => {
        return words.replace("?","!")
    })
    return z
}
const words = ["Why?", "JS", "You", "Me?"];
console.log(fromQuestionToExclamation(words));
// ["Why!", "JS", "You", "Me!"]






// 2. Вытащить числа в строку
function findNumbers(str) {
   let re=/[1,2,3,4,5,6,7,8,9,0]/g;
   return str.match(re).join("")
}
// Воспользуйтесь унарным оператором typeof или функцией isNaN
console.log(findNumbers("Мне было 15 в 2012-ом году"));
// "152012"






// 3. убрать пробелы и обвернуть "<>" каждую букву
function makeItCool(str) {
    let z=str.split(" ").join("").split("").join("><").toUpperCase()
    let result="<"+z+">"
    return result

}

console.log(makeItCool("i am super"));
// "<I><A><M><S><U><P><E><R>"







// 4. Перевернуть слова и удалить гласные
function reverseWordsWithoutVowel(arr) {
    let result=arr.map(str=>{
        return str.replace(/[aeuio]/g,"")    
    })
    // console.log(result)
    let x=""
    for(let i=0;i<result.length;i++){
        x=x+" "+result[i].split("").reverse().join("")
    }
    return x
}

console.log(reverseWordsWithoutVowel(["banana", "apple", "orange"]));
// ["nnb", "lpp", "gnr"]



