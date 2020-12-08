const fs = require('fs')
const inquirer = require("inquirer");
const csv = require('csvtojson');

async function asyncCall(){
  const read = fs.readFileSync("employees.csv","utf-8")
  const jsonObj = await csv().fromString(read)
  inquirer.prompt([{
    name:"id",
    message:"choose an id number (only possible from 1 to 10)",
    type:"number",
    default: 1
    }, {
    name:"atributo",
    message:"choose the attribute you want to see",
    type:"checkbox",
    choices:[ "first_name", "last_name","email","ip_address"]
    }]).then(answer =>{
      let idNew = answer.id - 1
      
      if( answer.atributo.length == 1 && true){
        let atr = String(answer.atributo)
        console.log(`${answer.atributo}:`, jsonObj[idNew][atr])

      }else if(answer.atributo.length == 4 && true){
        console.log( jsonObj[idNew])

      }else if(answer.atributo.length <= 3){
        for(let i = 0; i < answer.atributo.length ; i++ ){
          console.log(`${answer.atributo[i]}:` , jsonObj[idNew][answer.atributo[i]])

        }
      }
      
    })
}

asyncCall()