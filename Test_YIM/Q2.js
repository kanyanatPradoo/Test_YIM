const readline = require('readline');
const readInterface = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,

});
readInterface.question('Enter a str: ' , str =>
 {   
    var arr = str.split('').map(String);
    var num_temp=0,max=0; 
    var char_temp='' , char=''; 
    let i =0;
    
    while(i<arr.length) {
         i++;
    if(char_temp != arr[i]){
        if(num_temp > max){
            max = num_temp;
            char = char_temp;
        }
        num_temp = 1;
        char_temp = arr[i];
    }else {
    num_temp++;
    }
}
if (num_temp > max){
    max = num_temp;
    char = char_temp;
}

console.log(max) ;
readInterface.close();    
});