// let aa;
// aa = 3;
// console.log(aa);
// 
// // Определите переменную aс помощью varи инициализируйте ее значением 9.
// 
// var bb = 9;
// 
// /* 
// Создайте две новые строковые переменные: 
// myFirstNameи myLastNameи присвойте им значения вашего имени и фамилии соответственно.
// */
// 
// const myFirstName = "my";
// const myLastName = " name";
// console.log(myFirstName + myLastName);
// 
// /*
// Инициализируйте три переменные a, b, и cс 5, 10, и "I am a"соответственно так, 
// чтобы их не было undefined.
// */
// 
// let a = 5;
// let b = 10;
// let c = "I am a";
// 
// a = a + 1;
// b = b + 5;
// c = c + " String!";
// 
// 
// // Измените существующие объявления и назначения, чтобы в их именах использовался camelCase.
// 
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;
// 
// /*
// Вам нужно будет использовать управляющие последовательности, чтобы правильно вставлять специальные 
// символы. Вам также нужно будет соблюдать интервалы, как показано выше, без пробелов между 
// управляющими последовательностями или словами. Примечание. Отступ для SecondLineдостигается с 
// помощью escape-символа табуляции, а не пробелов.
// */
// 
// const myStr = "FirstLine" + "\n\t\\SecondLine" + "\nThirdLine";
// console.log(myStr);
// 
// // Создайте вложенный массив с именем myArray.
// 
// const myArray = [["Joy", 19], [18, "Jean"]];
// 
// // Create a variable called myData and set it to equal the first value of myAarray using bracket notation.
// 
// const myAarray = [50, 60, 70];
// 
// let myData = myAarray[0];


// Написать функцию, которая принимает строку и возвращает массив всех заглавных букв, найденных в строке.

function capitals(word){
    var ara = []
    for(var i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase()){
        ara.push(word.indexOf(word[i]))
    }
}
return ara
}

/*
Call the processArg function with an argument of 7 and assign its 
return value to the variable processed.
*/

let processed = 0;

function processArg(num) {
return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


// Измените welcomeToBooleansфункцию, чтобы она возвращала trueвместо false.

function welcomeToBooleans() {
    return true; 
}
welcomeToBooleans()


/*
Write a function which removes from string all non-digit characters 
and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

getNumberFromString = s => +s.replace(/\D/g,'')