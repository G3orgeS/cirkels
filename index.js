const maxAmount = 20
const isEven = num => num % 2 === 0;
const optionNumber = 0;

const colorfullcontainer = document.getElementById('colorfullcontainer')
const circledropdown = document.getElementById("select");

for (let i = 0; i <= maxAmount; i++) {
    
    optionNumber = document.createElement('option')
    
    optionNumber.setAttribute("value", [i]);
    optionNumber.innerHTML = i;

    circledropdown.appendChild(optionNumber)
}

function extractValue(value) {

    let x;
    let div;

    document.getElementById('colorfullcontainer').innerHTML = "";
    
    for (let i = value; i >= 1; i--) {
        x = 5 + (value - i) * 1;
        div = document.createElement('div');

        div.style.width = x + '0' + 'px';
        div.style.height = x + '0' + 'px';

        if (isEven(i)) {
            div.style.backgroundColor = 'white';
        } else {
            div.style.backgroundColor = 'gray';
        }

        div.setAttribute("id", "select-" + i);
        div.setAttribute('class', 'circlecontainer');
        div.style.zIndex = i

        colorfullcontainer.appendChild(div);
    }
}