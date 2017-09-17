
var Box = require("./BoxClass.js");

module.exports = function(entryProducts) {
	/* Internal variables */
	this.currentsBox = [];
	// check entry is a string
	if (typeof entryProducts !== 'string') {
		throw new Error('Entry line product must be a string');
	}
	this.entryProducts = entryProducts;

	/* Functions */
	/* Transform a string line to Array of Numbers */
 	this.transformStringsToArrayNumbers = string => {
		let array = [];
		for (var i in string) {
			array.push(parseInt(string[i]));
		}
		return array;
 	}
 	/* Get the max value in Array of Numbers */
 	this.getMaxValueInArrayNumbers = arrayNumbers => {
 		let max;
 		for (var i in arrayNumbers) {
 			if (max === undefined || max < arrayNumbers[i]) {
 				max = arrayNumbers[i];
 			}
 		}
 		return max;
 	};
 	/* Delete a value from product list */
 	this.deleteValueInProductsList = value => {
 		this.entryProducts.splice(this.entryProducts.findIndex(val => val === value), 1);
 	};
 	/* Fill Box or Create a new one */
 	this.fillBoxs = value => {
 		// search if a box have enouth space
 		let boxFilled = false;
 		for (var i in this.currentsBox) {
 			if (this.currentsBox[i].capacityRemain >= value) {
 				boxFilled = true;
 				return this.currentsBox[i].add(value);
 			}
 		}
 		// init a new box to fill if no box are ever filled
 		if (boxFilled === false) {
 			this.currentsBox.push(new Box());
 			return this.currentsBox[this.currentsBox.length-1].add(value);
 		}
 		
 	};
 	/* Format results in object to display */
 	this.displayResults = () => {
 		let out = '';
 		let cpt = 0;
 		for (var i in this.currentsBox) {
 			out += this.currentsBox[i].displayContent() + '/';
 			cpt++;
 		}
 		return {out, cpt};
 	}
 	/* Init */
	this.init = function() {
		this.entryProducts = this.transformStringsToArrayNumbers(this.entryProducts);
		while(this.entryProducts.length > 0) {
			const maxValue = this.getMaxValueInArrayNumbers(this.entryProducts);
			if (this.fillBoxs(maxValue)) {
				// if box is good filled, delete value filled from list
				this.deleteValueInProductsList(maxValue);
			} else {
				throw new Error ('Error in Box filling..');
			}
		}
	};
 	// init robot directly
	this.init();
}