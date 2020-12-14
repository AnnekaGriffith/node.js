process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Read and save an integer, double, and String to your variables.
    var i1 = parseInt(readLine()); //used parseInt to make int
    var d1 = Number(readLine()); //used Number used to make a double
    var s1 = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + i1);
    // Print the sum of the double variables on a new line.
    console.log((d + d1).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s1);
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    
}