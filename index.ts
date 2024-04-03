#!  /usr/bin/env node

import inquirer from 'inquirer' ;
import chalk from 'chalk';

//Iniatialize user balance and pin code

let mybalance:number = 15000;
let mypin:number = 12345;

//Print welcom message

console.log(chalk.magentaBright( " <== Welcome To My ATM Machine ==> "));
console.log(chalk.blueBright(" \t <== Riza Shakeel ==> "));

let pinanswer = await inquirer.prompt(
    [
        {
            name : "pin",
            type : "number",
            message : chalk.yellowBright( " Enter Your Pin Code: ",)
        }   
    ]
)

if(pinanswer.pin === mypin){
    console.log(chalk.green("\n \t Pin Is Correct, LOGIN SUCCSESSFULLY! \n"))
    //console.log(chalk.bgYellowBright(`Current Account Balance Is ${mybalance}`))

    let operationanswer = await inquirer.prompt(
        [
            {
                name : "operation",
                type : "list",
                message : chalk.yellowBright("Select an operaton "),
                choices : ["Withdraw Amount" , "Check Balance"]
            }
        ]
    )

 if (operationanswer.operation === "Withdraw Amount"){
        let withdrawans = await inquirer.prompt (
           [
               {
                   name : "withdrawlmethod",
                   type : "list",
                   message : chalk.yellowBright ("Select withdrwal method"),
                   choices : ["Fast Cash" , "Enter Amount"]
               }
           ]
       )   
 
 if ( withdrawans.withdrawlmethod === "Fast Cash"){
    let fastcash = await inquirer.prompt(
        [
            {
                name : "FastCash",
                type : "list",
                message : chalk.yellowBright( "Select Amount"),
                choices : [1000, 3000, 5000, 7000, 9000, 10000, 20000]
            }
        ]
    )

 if (fastcash.FastCash > mybalance){
    console.log(chalk.red("\n \t INSUFFICIANT BALANCE!\n"))
 }   

 else{
    mybalance -= fastcash.FastCash 
    console.log(chalk.green(`\n \t ${fastcash.FastCash } WITHDRAW SUCCESSFULLY\n`))
    console.log(chalk.blueBright(`Your remaining balance is ${mybalance}`))
 }
 }   

 else if (withdrawans.withdrawlmethod === "Enter Amount"){
    let amountanswer = await inquirer.prompt(
        [
            {
                name : "amount",
                type : "number",
                message : chalk.yellowBright( "Enter the amount to withdraw:"),
            }
        ]
    )

 if (amountanswer.amount > mybalance){
    console.log(chalk.redBright("\n \t INSUFFICIANT BALANCE!\n"))
}

else{
    mybalance -= amountanswer.amount
    console.log(chalk.green(`\n \t ${amountanswer.amount} WITHDRAW SUCCESSFULLY!\n`))
    console.log(chalk.blueBright(`Your Remaining Balance is ${mybalance}`))
}
}   
}

else if (operationanswer.operation === "Check Balance"){
    console.log(chalk.magentaBright(`\n \t Your account Balance is ${mybalance}\n`))
}
}

else{
    console.log(chalk.redBright("\n \t Pin is INCORRECT , TRY AGAIN\n"))
};


