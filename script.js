
let count = 0;

const countSpan = document.getElementById('count');
const errorMessage = document.getElementById('error-message');
const clearBtn = document.getElementById('clear-btn');

document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    errorMessage.style.display = 'none'; // Hide error ho jaaegi jab increment hoga
    updateCounter();
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    if (count > 0) {
        count--;
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
    updateCounter();
});

clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
    clearBtn.style.display = 'none'; // sab saaf ho jaaega
});

function updateCounter() {
    countSpan.innerHTML = count;
    if (count > 0) {
        clearBtn.style.display = 'inline-block'; //count agar zero se jadaa hoga toh display ho jaaega
    } else {
        clearBtn.style.display = 'none';
    }
}
