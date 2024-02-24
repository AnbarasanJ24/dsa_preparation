//https://takeuforward.org/pattern/pattern-6-inverted-numbered-right-pyramid/


const pattern= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        // 5 - 0, 5 - 1 and so on
        for(let col = 1; col <= rows - row ; col++){
            string += col+ " "
        }
        string += "\n"
    }
    return string;
}
console.log(pattern(5))
