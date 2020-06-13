// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toLocaleUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentenceArr = sentence.split(' ');
var result = '';
for(var i in sentenceArr){
    result += sentenceArr[i].substring(0,1).toLocaleUpperCase() + sentenceArr[i].substring(1) + ' ';
}
console.log(result);



// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var value = money.substring(1);
console.log(value);
