//https://takeuforward.org/pattern/pattern-2-right-angled-triangle-pattern/


const pattern2 = (rows)=>{
    let string = ""
    
    for (let row = 0; row < rows; row++){
        for(let col = 0; col <= row; col++){
            string += "* "
        }
        string += "\n"
    }
    return string;
}
console.log(pattern2(5))

// T.c => O(N^2)
// S.C => O(N^2)