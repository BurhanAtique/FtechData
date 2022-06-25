const table = document.getElementById('tableId');
const tableId = document.getElementById('idVal');
const input = document.getElementById('inp');
const sub = document.getElementById('sub');

let obj = {};
fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            obj = data; //this not working
            mapData(data);
            // addEvent(data);
        })
        .catch(err => console.log("error", err))
};

mapUsers = (data) => {
    tableId.innerText = "";
    data.map((dat) => {
        var rowCount = tableId.rows.length;
        row = tableId.insertRow(rowCount);
        cel1 = row.insertCell(0);
        cel2 = row.insertCell(1);
        cel3 = row.insertCell(2);
        cel1.innerText = dat.id;
        cel2.innerText = dat.title;
        cel3.innerText = dat.completed;
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

search = () => {
    console.log("here");
    const idVal = input.value;
    const url = `https://jsonplaceholder.typicode.com/users/${idVal}/todos`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(JSON.stringify(data))
            mapUsers(data);
        })
    return false;
}