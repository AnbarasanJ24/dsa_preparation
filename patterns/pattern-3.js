//https://takeuforward.org/pattern/pattern-2-right-angled-triangle-pattern/


const pattern3= (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        for(let col = 0; col <= row; col++){
            string += col + 1
        }
        string += "\n"
    }
    return string;
}
console.log(pattern3(10))

// T.c => O(N^2)
// S.C => O()