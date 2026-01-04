//6.Login counter using closure

function createLoginCounter() {
    let loginCount = 0;
    return function() {
        loginCount++;
        console.log(`User logged in ${loginCount} times`);
    }
}
const loginButton = document.createElement('button');
loginButton.textContent = 'Login';
document.body.appendChild(loginButton);
loginButton.addEventListener('click', createLoginCounter());

//7.Simulated API call using promise

function simulateApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve('API call successful');
        }, 1500);
    });
}

simulateApiCall().then(message => console.log(message));


//8.Fetch user data with async/await

async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }   
}
getUserData();

//9.Shopping cart using spread operator

const cart1 = ['apple', 'banana'];
const cart2 = ['orange', 'grape'];
const combinedCart = [...cart1, ...cart2];
console.log('Combined Shopping Cart:', combinedCart);

//10.Function accepting unlimited arguments using rest

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log('Sum of all numbers:', sumAll(1, 2, 3, 4, 5));
console.log('Sum of all numbers:', sumAll(10, 20, 30));

