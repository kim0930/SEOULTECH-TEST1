
const generateButton = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');
const themeSwitch = document.getElementById('checkbox');

// Function to set the theme
function setTheme(isLight) {
    if (isLight) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    themeSwitch.checked = true;
    setTheme(true);
} else {
    themeSwitch.checked = false;
    setTheme(false);
}


// Event listener for the theme switch
themeSwitch.addEventListener('change', () => {
    setTheme(themeSwitch.checked);
});


// Lotto number generation
generateButton.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    
    const favoriteIndex = Math.floor(Math.random() * 4);
    const reasons = [
        "이 번호들은 황금 비율에 가장 가깝습니다!",
        "오늘의 행운의 기운이 가장 강력하게 느껴지는 조합이에요.",
        "수학적으로 가장 균형 잡힌 분포를 보여주는 세트입니다.",
        "우주가 당신에게 보내는 특별한 신호일지도 모릅니다."
    ];
    const selectedReason = reasons[favoriteIndex];

    for (let i = 0; i < 4; i++) {
        const row = document.createElement('div');
        row.classList.add('numbers-row');
        
        if (i === favoriteIndex) {
            row.classList.add('favorite');
            row.setAttribute('data-tooltip', selectedReason);
        }

        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            row.appendChild(numberElement);
        });
        
        numbersContainer.appendChild(row);
    }
});
