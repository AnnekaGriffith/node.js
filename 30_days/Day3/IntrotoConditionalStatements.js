'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function WeirdDetector(N)
{
    if(N%2 == 0)
    {
        if(N>5 && N<21)
        {
            console.log("Weird");
        }
        else
        {
            console.log("Not Weird");
        }
    }
    else
    {
        console.log("Weird");
    }
    
}


function main() {
    const N = parseInt(readLine(), 10);
    WeirdDetector(N);
}
