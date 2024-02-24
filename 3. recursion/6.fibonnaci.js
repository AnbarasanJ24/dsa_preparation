// Finonacci series
// 0,1,1,2,3,5,8,13.....
// f(5) = f(4)+ f(3)

const fibonacci = (num) => {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(5))

// Here each number has two recursion call so 2 ^ N (Expotential) 
// T.C => O (2^N)
// S.C => O (N/2)
