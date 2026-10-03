
function generateYears(start , end , exclude){
    for(let i = start ; i<= end ; i++){
        if(i===exclude){
            continue; //skip it ignore it
        }
            console.log(i);
    }
}

generateYears(2001 , 2026 , 2020);