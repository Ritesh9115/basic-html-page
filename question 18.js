// This is now a JavaScript Class, which is a more modern way to create blueprints for objects.
class Person {
    // The 'constructor' is a special method that runs when you create a new Person.
    constructor(name, age) {
        this.name = name; // 'this.name' means this specific person's name
        this.age = age;   // 'this.age' means this specific person's age
    }

    // This is a method (action) that every Person object can do.
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // New method: sayHello()
    sayHello() {
        return `Hi there! I'm ${this.name}.`;
    }
}

// Now, let's create two actual people using our 'Person' blueprint:
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// We can now look at their details and make them greet!
console.log("--- Details for Person 1 (Alice) ---");
console.log("Person 1 object:", person1);
console.log("Person 1's name:", person1.name);
console.log("Person 1's age:", person1.age);
console.log("Alice says (greet):", person1.greet()); // Alice uses her own greet method
console.log("Alice says (sayHello):", person1.sayHello()); // Alice uses her new sayHello method

console.log("\n--- Details for Person 2 (Bob) ---");
console.log("Person 2 object:", person2);
console.log("Person 2's name:", person2.name);
console.log("Person 2's age:", person2.age);
console.log("Bob says (greet):", person2.greet()); // Bob uses his own greet method
console.log("Bob says (sayHello):", person2.sayHello()); // Bob uses his new sayHello method

// JavaScript for changing text on button click
document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const messageElement = document.getElementById('message');

    if (changeTextButton && messageElement) {
        changeTextButton.addEventListener('click', () => {
            messageElement.textContent = "The message has been changed!";
        });
    }

    // JavaScript for input text display
    const textInput = document.getElementById('textInput');
    const displayInputButton = document.getElementById('displayInputButton');
    const displayTextElement = document.getElementById('displayText');

    if (textInput && displayInputButton && displayTextElement) {
        displayInputButton.addEventListener('click', () => {
            displayTextElement.textContent = textInput.value;
        });
    }

    // Dynamic list functionality
    const addItemButton = document.getElementById('addItemButton');
    const myList = document.getElementById('myList');
    let itemCounter = 3;

    if (addItemButton && myList) {
        addItemButton.addEventListener('click', () => {
            const newItem = document.createElement('li');
            newItem.textContent = `Dynamically Added Item ${itemCounter}`;
            myList.appendChild(newItem);
            itemCounter++;
        });
    }
});
