//                 known param             not sure how much 
//                         Default value
function showInfo(userName = "Unknown" , age="Unknown" , rate=0 , show="Yes" ,  ...skills){
    document.write(`<div>`);
        document.write(`<h2>Welcome , ${userName}</h2>`);
        document.write(`<p>Age: ${age}</p>`);
        document.write(`<p>Hour Rate: $${rate}</p>`);
            if(show === "Yes"){
                // console.log("Show Skills");
                if(skills.length>0){
                    document.write(`<p>Skills: ${skills.join(" | ")}</p>`);// HERE ALSO WE CAN USE LOOP
                }
                else{
                    document.write(`<p>No Skills</p>`);
                }
            }
            else{
                // console.log("Do not Show Skills");
                if(skills.length>0){
                    document.write(`<p>Skills is Hidden </p>`);//here there is skills but i don't need to show them
                }
                else{
                    document.write(`<p>No Skills</p>`);
                }
                
            }
    document.write(`<hr>`);
    document.write(`</div>`);

}

showInfo();

showInfo("Mohammad2" , 25);

showInfo("Mohammad3" , 25, 50);

showInfo("Mohammad4" , 25, 50 , "Yes");
showInfo("Mohammad4" , 25, 50 , "No");
showInfo("Mohammad4" , 25, 50 , "1");

showInfo("Mohammad5" , 25, 50 , "No");
showInfo("Mohammad5" , 25, 50 , "Yes");
showInfo("Mohammad5" , 25, 50 , "Yes" , "HTML" , "CSS" , "JS");

showInfo("Mohammad6" , 25, 50 , "No");
showInfo("Mohammad6" , 25, 50 , "No" , "HTML" , "CSS" , "JS");