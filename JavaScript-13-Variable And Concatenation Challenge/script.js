// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

let myTitle = "Hello World";
let myDescription = "this is my website";
let myDate = "9/16/2026";

let myVar = `
    <div class="parent">
        <div class="child">
            <h3>${myTitle}</h3>
            <p>${myDescription}</p>
            <span>${myDate}</span>
        </div>
    </div>
`;

let repeatedVar = myVar.repeat(5);
document.write(repeatedVar);

