const redline = require("readline");
const rl = redline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 const GuessNumber  = Math.floor(Math.random()*100+1);
 console.log("Guess the correct number (between 1 to 100)");

 function askGuess(){
    rl.question("Enter your number:" ,function(num){
    num = parseInt(num);
    if (num===GuessNumber) {
        console.log("Correct Number");
         rl.close();
    }else if (num<GuessNumber) {
        console.log("Try a higher number");
        askGuess();
    }else{
        console.log("Try a lower number");
        askGuess();
    }
   
 });
 }
 askGuess();