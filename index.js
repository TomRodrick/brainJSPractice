const brain = require('brain.js');

const network = new brain.NeuralNetwork();
network.train([
    {input:[1, 2], output: [1]}, //1 wins
    {input:[1, 3], output: [1]}, //2 wins
    {input:[2, 3], output: [0]}, //2 wins
    {input:[2, 4], output: [1]} //4 wins
    

]);

const output = network.run([1, 4]);
console.log(output);
