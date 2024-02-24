//https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/


const pattern= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        // 5 - 0 , 5 - 1 and so on
        for(let col = 1; col <= rows - row; col++){
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


