//https://takeuforward.org/pattern/pattern-7-star-pyramid/

// Pattern is space, star, space
const pattern7= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        // space
        for(let col = 0 ; col < rows - row -1; col++){
            string += " "
        }
        // star
        for(let col = 0 ; col < (row*2)+1;col++){
            string += "*"
        }
        // space
        for(let col = 0 ; col < rows - row -1; col++){
            string += " "
        }
        string += '\n'
    }
    return string;
}
console.log(pattern7(10))