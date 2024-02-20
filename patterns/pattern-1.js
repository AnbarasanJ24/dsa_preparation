//https://takeuforward.org/pattern/pattern-1-rectangular-star-pattern/


const pattern1 = (rows, columns)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        for(let col = 0; col < columns; col++){
            string += "* "
        }
        string += "\n"
    }
    return string;
}
console.log(pattern1(5,5))

// T.c => O(N^2)
// S.C => O()