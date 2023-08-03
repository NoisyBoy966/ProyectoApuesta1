function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spin() {
    const wheel = document.querySelector('.wheel');
    const resultElement = document.createElement('p');
    const numbers = [];

    for (let i = 0; i < 10; i++) {
        const randomNumber = getRandomInteger(1, 100);
        numbers.push(randomNumber);
    }

    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${3600 + getRandomInteger(0, 359)}deg)`;

    setTimeout(() => {
        resultElement.textContent = `Número: ${numbers[numbers.length - 1]}`;
        document.body.appendChild(resultElement);
    }, 3000); 
}
