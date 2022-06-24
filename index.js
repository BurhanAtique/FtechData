const table = document.getElementById('tableId');
const input=document.getElementById('inp');
var obj;
fetchData = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            // console.log(JSON.stringify(data));
            obj=data;
            mapData(data);
        });
};

mapData = (data) => {
    data.map((dat) => {
        // console.log(dat.username);
        // console.log(table.rows.length);
        var rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        cel1 = row.insertCell(0);
        cel2 = row.insertCell(1);
        cel3 = row.insertCell(2);
        cel1.innerText = dat.username;
        cel2.innerText = dat.name;
        cel3.innerText = dat.email;
    })
};
fetchData();

input.addEventListener('keyup',(event)=>{
    event.preventDefault();
    var objectData=filetrData(event.target.value);
    console.log(objectData);
    mapData(objectData);
})

filetrData = (key) => {
    console.log(key);
    obj.filter((dt)=>{
        return dt.username.includes(key)
    })
};

matc