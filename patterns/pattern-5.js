//https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/


const pattern= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        // 5 - 0 - 1, 5 - 1 - 1 and so on
        for(let col = 0; col <= rows - row - 1; col++){
            string += "* "
        }
        string += "\n"
    }
    return string;
}
// const pattern= (rows)=>{
//     let string = ""
    
//     for (let row = 0; row < rows; row++){
//         for(let col = rows; col > row; col--){
//             string += "* "
//         }
//         string += "\n"
//     }
//     return string;
// }
console.log(pattern(5))
