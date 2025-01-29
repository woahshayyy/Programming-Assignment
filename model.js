module.exports = {
    numbers: [],

    addNumber(num) {
        this.numbers.push(num);
    },

    checkCondition() {
        for (let i = 0; i < this.numbers.length; i++) {
            for (let j = i + 1; j < this.numbers.length; j++) {
                for (let k = 0; k < this.numbers.length; k++) {
                    if (this.numbers[i] * this.numbers[j] === this.numbers[k]) {
                        return `Condition met: ${this.numbers[i]} x ${this.numbers[j]} = ${this.numbers[k]}`;
                    }
                }
            }
        }
        return "Condition not met.";
    }
};
