//https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/


const pattern= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        for(let col = 0; col <= row; col++){
            string += row + 1
        }
        string += "\n"
    }
    return string;
}
console.log(pattern(5))
