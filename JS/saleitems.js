let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let employees = [
    { Item: 'Choker',  offer: '10%',saleprice: 21 },
    { Item: 'Earrings',offer: '15%', saleprice: 31 },
    {Item: 'Pearls',offer: '20%', saleprice: 18 },
    { Item: 'Longset', offer: '30%',saleprice: 20 }
]
let headers = ['Item', 'PercentageOff','Saleprice'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    employees.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});