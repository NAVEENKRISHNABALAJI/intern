let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

//template
let text=`He's often called "John"`
console.log(text.length)
//Backslash is used to escape characters
let text2 = "We are the so-called \"Vikings\" from the north.";
console.log(text2);

// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

//extracting characters
let txt = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);
//above method doesnot allow negative indices so at() method was introduced in 2022
const name = "W3Schools";
let letter = name.at(2);
console.log(letter);

//extracting string parts
let fruits = "Apple, Banana, Kiwi";
console.log(fruits.length)
let part = fruits.slice(7, 13);
console.log(part)
part= fruits.slice(7)// if the second parameter is omitted the rest of the string is sliced
console.log(part);
part = fruits.slice(-12);
console.log(part);

//substr() in this method the second parameter defines the length of the string to be sliced
part = fruits.substr(7, 6)
console.log(part);

let text1 = "Hello World!";
console.log(text1.toUpperCase())
console.log(text1.toLowerCase())

text1="       Hello      "
console.log(text1.trim())//trim function trims the blank spaces before and after the string
console.log(text1.trimStart())
console.log(text1.trimEnd())
text1=text1.trim()

console.log(text1.repeat(4))
text1= text1.repeat(3)
let newtxt= text1.replace("Hello","Hi")//replace method only replaces the first match
console.log(newtxt)
newtxt= text1.replace(/Hello/g,"Hi")//replaces all matches
console.log(newtxt)
newtxt= text1.replace(/heLlo/ig,"hop")//irrespective of case sensitivity
console.log(newtxt)