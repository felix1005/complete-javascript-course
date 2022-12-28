'use strict';

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        let str = this.question + '\n';
        for (const option of this.options) {
            str += option + '\n';
        }
        str += '(Write option number)';

        const input = Number(prompt(str));
        input <= 3 ? this.answers[input]++ : alert('Invalid option!');

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

//Data 1
poll.displayResults.call({ answers: [5, 2, 3] });

// Data 2
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');