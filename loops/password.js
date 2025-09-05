const redline = require("readline");
const rl = redline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let attepmt = 0;
const max_attepmt = 3;
const user={
    Harsh: "Harsh123@",
    Karan: "Karan123@",
    Admin: "Admin123@",
}
let current_user = ""
function askUserName(){
     rl.question("Enter your username ",function(username){
        if (user[username]) {
            current_user=username;
            askPassword();
        }else{
            console.log(`User not found => ${username}`)
            askUserName();
        }
     });
}

function askPassword(){
    rl.question("Enter your password ",function(password){
        if(password==user[current_user]){
            console.log(`✅ Access granted. Welcome, ${current_user}`);
            rl.close();
        }else{
            attepmt++;
            console.log(`❌ Wrong password! Attempts left: ${max_attepmt - attepmt}`)
            askPassword();
        }
    });
}
askUserName();