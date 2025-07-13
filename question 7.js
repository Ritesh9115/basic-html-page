const sumTwoNumbers = (num1, num2) => {
    return num1 + num2;
};

const result1 = sumTwoNumbers(10, 5);
console.log("Sum of 10 and 5:", result1);

const result2 = sumTwoNumbers(7, -3);
console.log("Sum of 7 and -3:", result2);

const result3 = sumTwoNumbers(2.5, 3.7);
console.log("Sum of 2.5 and 3.7:", result3);

const numberA = 100;
const numberB = 200;
const result4 = sumTwoNumbers(numberA, numberB);
console.log(`Sum of ${numberA} and ${numberB}:`, result4);

document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const messageElement = document.getElementById('message');

    if (changeTextButton && messageElement) {
        changeTextButton.addEventListener('click', () => {
            messageElement.textContent = "The message has been changed!";
        });
    } else {
        console.error("Could not find 'changeTextButton' or 'message' element. Make sure their IDs are correct in the HTML.");
    }
});
