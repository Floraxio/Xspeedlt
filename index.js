console.log ('BEGIN');

var PackingRobot = require("./PackingRobotClass.js");

/* launch packing robot service */
const packingService = new PackingRobot('163841689525773');

const results = packingService.displayResults();
console.log ('result', results.out + ' ===> '+ results.cpt + ' Box utilise');


console.log ('END');
