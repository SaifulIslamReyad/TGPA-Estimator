document.addEventListener('DOMContentLoaded', function() {
    const calcIcon = document.createElement('div');
    calcIcon.classList.add('calcIcon');
    calcIcon.innerHTML = '<i class="fas fa-calculator"></i>';
    document.body.appendChild(calcIcon);

    
    calcIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleCalculator();
    });

    document.addEventListener('click', function(event) {
        const calculator = document.querySelector('.calculator');
        if (calculator && !calculator.contains(event.target) && event.target !== calcIcon) {
            calculator.remove();
        }
    });
});

function toggleCalculator() {
    const calculator = document.querySelector('.calculator');
    if (calculator) {
        calculator.remove();
    } else {
        const calculatorDiv = document.createElement('div');
        calculatorDiv.classList.add('calculator');
        calculatorDiv.innerHTML = `
            <div class="screen">0</div>
            <div class="buttons">
                <button onclick="appendToScreen('7')">7</button>
                <button onclick="appendToScreen('8')">8</button>
                <button onclick="appendToScreen('9')">9</button>
                <button onclick="appendToScreen('+')">+</button>
                <button onclick="appendToScreen('4')">4</button>
                <button onclick="appendToScreen('5')">5</button>
                <button onclick="appendToScreen('6')">6</button>
                <button onclick="appendToScreen('-')">-</button>
                <button onclick="appendToScreen('1')">1</button>
                <button onclick="appendToScreen('2')">2</button>
                <button onclick="appendToScreen('3')">3</button>
                <button onclick="appendToScreen('*')">*</button>
                <button onclick="appendToScreen('0')">0</button>
                <button onclick="clearScreen()">AC</button>
                <button onclick="calculate()">=</button>
                <button onclick="appendToScreen('/')">/</button>
            </div>
            <span class="close" onclick="toggleCalculator()">X</span>`;
        document.body.appendChild(calculatorDiv);
    }
}

function appendToScreen(value) {
    const screen = document.querySelector('.screen');
    if (screen.textContent === '0') {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}

function clearScreen() {
    const screen = document.querySelector('.screen');
    screen.textContent = '0';
}

function calculate() {
    const screen = document.querySelector('.screen');
    try {
        const result = eval(screen.textContent);
        screen.textContent = result;
    } catch (error) {
        screen.textContent = 'Error';
    }
}
