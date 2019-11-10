const brain = require('brain.js')
const data = require('./data.json')

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item=>({
    input: item.text,
    output: item.category
}));

network.train(trainingData);
const output = network.run('Debugging training data', {
    iterations: 1000

});

// const _network = new brain.NeuralNetwork();
// network.train([
//     {input:[0, 0, 1], output: [1]}, 
//     {input:[1, 0, 0], output: [1]}, 
//     {input:[1, 1, 1], output: [0]}, 
//     {input:[0, 1, 1], output: [1]} 

// ]);
 console.log(trainingData);



