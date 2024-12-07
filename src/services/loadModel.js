const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/cancer-prediction-storagee/model.json');
}
module.exports = loadModel;