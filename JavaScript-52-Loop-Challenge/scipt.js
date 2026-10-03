

/*
Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop" , "Samera" ];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar" , "Sarah"];

let adminCount = 0;
for(let i =0 ; i< myAdmins.length ; i++ ){
    // adminCount++;
    // if(adminCount === 3){
    //     break;
    // }
        
        if(myAdmins[i] == 'Stop'){
        break;
        
    }adminCount++;
    
}
// document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${adminCount} Admins</div>`);
document.write(`<hr>`);

for(let i =0 ; i< myAdmins.length ; i++){
    //if we put this if at the end of the for stop will be an admin and have members
        if(myAdmins[i] == 'Stop'){
        break;
    }
    document.write(`<div>`);
        document.write(`<p>The Admin For Team ${i+1} Is ${myAdmins[i]}</p>`);
        
        document.write(`<h3>Team Members:</h3>`)
        let counter = 1; // we can put here let counter = 0; and down put ++counter 
            for(let j = 0 ; j<myEmployees.length ; j++){
                // let counter = 0; here counter freezed at zero

                //here checks is hardcoded
                // if(myAdmins[i][0] == 'A' && myEmployees[j][0]=='A'){
                //     document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
                //     }
                
                // if(myAdmins[i][0] == 'O' && myEmployees[j][0]=='O'){
                //     document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
                //     }
                
                // if(myAdmins[i][0] == 'S' && myEmployees[j][0]=='S'){
                //     document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
                //     }

                if(myAdmins[i][0] === myEmployees[j][0]){
                    document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
                    }
                
                
            }

            
        
    document.write(`</div>`);
    document.write(`<hr>`);
}


