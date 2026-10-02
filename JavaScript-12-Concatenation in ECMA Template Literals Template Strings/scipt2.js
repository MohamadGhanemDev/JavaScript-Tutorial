
// take the hole code and put in babel website to see how much complex is the legacy code 


// let markUp = `
//     <div class="card">
//         <div class="child">
//             <h2>Title</h2>
//             <p>This is my Website</p>
//         </div>
//     </div> 
// `;

// document.write(markUp);
let title = "This is a title";
let desc = "This is a description";
let markUp = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div> 
`;

document.write(markUp);