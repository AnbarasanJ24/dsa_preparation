//https://takeuforward.org/pattern/pattern-6-inverted-numbered-right-pyramid/


const pattern= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        // 5 - 0 - 1, 5 - 1 - 1 and so on
        for(let col = 0; col <= rows - row - 1; col++){
            string += col +1 + " "
        }
        string += "\n"
    }
    return string;
}
console.log(pattern(5))
