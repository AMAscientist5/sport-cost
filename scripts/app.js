// to get the selected players numbers
function getOrderList() {
    const orderList = document.getElementById('order-list');
    return orderList;
}


function getall(elementId, btnId) {
    const orderLists = document.getElementById('order-list').childElementCount;
    if (orderLists === 5) {
        alert('you can select maximum 5 player')
        return;
    } else {
        const element = document.getElementById(elementId);
        const elementText = element.innerText;

        const orderList = getOrderList();

        const li = document.createElement('li');
        const liText = document.createTextNode(elementText)
        li.appendChild(liText);
        orderList.appendChild(li);
        document.getElementById(btnId).disabled = true;
    }
}

// select button of Cristiano Ronaldo
document.getElementById('btn1').addEventListener('click', function() {
    getall('Cristiano', 'btn1');
})

// select button of Kevin De Bruyne
document.getElementById('btn2').addEventListener('click', function() {
    getall('Kevin', 'btn2');
})

// select button of Lionel Messi
document.getElementById('btn3').addEventListener('click', function() {
    getall('Lionel', 'btn3');
})

// select button of Kylian Mbappe
document.getElementById('btn4').addEventListener('click', function() {
    getall('Kylian', 'btn4');
})

// select button of Mohamed Salah
document.getElementById('btn5').addEventListener('click', function() {
    getall('Mohamed', 'btn5');
})

// select button of robert lewandowski
document.getElementById('btn6').addEventListener('click', function() {
    getall('robert', 'btn6');
})