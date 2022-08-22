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