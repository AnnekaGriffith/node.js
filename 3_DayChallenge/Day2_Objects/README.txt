JavaScript Objects

Objects are variables too, but objects can contain many values.

For example, this code below assigns three values (Fiat, 500, white) to a variable named myObject:

var myObject = {type:"Fiat", model:500, color:"white"};
The values are written as name:value pairs. The name and value are separated by a colon. The name:values pairs (in JavaScript objects) are called properties.

Here's a useful video discussing JavaScript Objects in general:


Accessing Object Properties

You can access object properties in two ways:

objectName.propertyName
or

objectName["propertyName"]
Task

In this example, you are given a single line consisting of property type values of a car in the following order:

TypeName ModelName ColorName
These values are assigned to an object car that has the properties type, model and color (read the code in the editor carefully to learn how that is done). Your task is to complete the code to print the object.

Sample Input

Fiat 500 White
Sample Output

{ type: 'Fiat', model: '500', color: 'White' }
Submissions: 727
Max Score: 100
Difficulty: Easy
Rate This Challenge:

    
More
