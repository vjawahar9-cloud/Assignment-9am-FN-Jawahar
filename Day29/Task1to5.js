//1.Create a closure that counts button clicks
function createClickCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(`Button clicked ${count} times`);
    };
}

const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', createClickCounter());

//2.Write a callback using setTimeout

setTimeout(() => {
    console.log('This message is displayed after 2 seconds');
}, 2000);


//3.Convert callback code into a promise

function asyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async operation completed');
        }, 2000);
    });
}

asyncOperation().then(message => console.log(message));


//4.Use async/await with try/catch

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

//5.Use destructuring on an object

const user = {
    name: 'John Doe',
    age: 30,
    role: 'Developer'
};

const { name, age, role } = user;
console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);










