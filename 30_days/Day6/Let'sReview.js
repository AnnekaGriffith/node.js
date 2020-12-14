function processData(input) {
    //Enter your code here
   let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((strln) => {
      let even = '';
      let odd = '';
        for(let i = 0; i < strln.length; i++) 
        {
            i % 2 ? odd += strln[i] : even += strln[i];
        }
        console.log(even.concat(" ", odd));
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
