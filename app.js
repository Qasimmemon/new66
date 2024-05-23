// var result = document.getElementById('result')
// var btn = document.getElementById('btn')
// var todo = document.getElementById('todo')
var btn = document.getElementById('btn')
var exence = document.getElementById('exence')
var income = document.getElementById('income')
var Date_1 = document.getElementById('Date')
var descriptiom = document.getElementById('descriptiom')
var table = document.getElementById('table')    
btn.addEventListener('click',function () {
    console.log(table);
    var data= ` 
    <tr>
    <td>${income.value}</td>
<td>${exence.value}</td>
<td>${Date_1.value}</td>
<td>${income.value - exence.value}</td>
    </tr> `   
    table.innerHTML+=data  
})

