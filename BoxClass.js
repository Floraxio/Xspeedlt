module.exports = function(capacityMax = 10) {

	if (typeof capacityMax !== 'number') {
		throw new Error('Box capacity must be a number');
	}
	this.capacityMax = capacityMax;
	this.capacityRemain = capacityMax;

	this.capacityFilled = 0;
	this.contains = [];

	/* Add a new quantity in the Box */
	this.add = quantity => {
		// check capacity
		const newCapacity = this.capacityFilled + quantity;
		if (newCapacity > this.capacityMax) {
			return false;
		}
		this.capacityFilled += quantity;
		this.capacityRemain = this.capacityMax - this.capacityFilled;
		this.contains.push(quantity);
		return true;
	};

	/* Display content of the Box */
	this.displayContent = () => {
		return this.contains.join('');
	}
}