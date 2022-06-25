const table = document.getElementById('tableId');
const input = document.getElementById('inp');
let obj = {};
fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            obj = data; //this not working
            mapData(data);
            addEvent(data);
        });
};

fetchRadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(res => res.json())
        .then(data => {
            mapDet(data);
        })
}

mapDet = (data) => {
    data.map((dat) => {
        var rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        cel1 = row.insertCell(0);
        cel2 = row.insertCell(1);
        cel3 = row.insertCell(2);
        cel1.innerText = dat.id;
        cel2.innerText = dat.title;
        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.id = 'contact';
        radiobox.value = 'email';
        cel3.appendChild = radiobox;
    })
};

mapData = (data) => {
    data.map((dat) => {
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


addEvent = (data) => {
    input.addEventListener('change', (event) => {
        event.preventDefault();
        // var objectData = filterData(data);
        var objectData = data.filter(dat => dat.username.includes(input.value));
        table.innerText = "";
        mapData(objectData);
    });
}


filterData = (data) => {
    return data.filter(dat => dat.username.includes(input.value));
    // return data.filter(checkUserName);
};
checkUserName = (obj) => {
    return obj.username.includes(inp.value);
}

// fetchRadData();
fetchData();