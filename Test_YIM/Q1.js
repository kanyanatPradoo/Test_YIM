
const readline = require('readline');
const readInterface = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,

});
readInterface.question('Enter a number: ' , number =>
readInterface.question('Enter sum: ' , sum =>
 {  
    var In = number.split(',').map(Number); 
    console.log(In);
    console.log(sum);
    
    var count=0,result=0;
    let i =0,j=0;
    
    while(i<In.length) {
         j=i+1;
        while(  j < In.length) {
            result = In[i]*In[j]; 
            if(result==sum){
              count++;  
            }
            j++;            
    }
    i++;
 } 
    
    
  console.log("ans"+count);   
     readInterface.close();
}
));