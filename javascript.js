const numbersContainer = document.querySelector('.numbers-buttons');


function createNumbers(){
    for (let i = 1; i<10; i++)
        {
            const num = document.createElement('button');
            num.innerHTML = i;
            numbersContainer.appendChild(num);

        }
        const num = document.createElement('button');
            num.innerHTML = 0;
            numbersContainer.appendChild(num);

}

createNumbers();
