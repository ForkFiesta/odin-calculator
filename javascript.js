const numbersContainer = document.querySelector('.numbers-buttons');


function createNumbers(){
    for (let i = 0; i<10; i++)
        {
            const num = document.createElement('button');
            num.innerHTML = i;
            numbersContainer.appendChild(num);
        }
}

createNumbers();
