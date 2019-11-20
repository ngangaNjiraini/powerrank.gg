let table = document.getElementById("rank-table");
window.onload = search();

function search() {
    fetch("http://localhost:8080/players/all")
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => createRanking(json))
        .catch(err => console.log(err));
    
    getList();
}

function createRanking(data) {
    const response = fetch("http://localhost:8080/ranking/clear/all", {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let winPercent;
    let teststr;
    let percentList = [];
    let counter = 1;
    //console.log(data.playerTag + ": " + winPercent);
    data.map(d => {
        winPercent = (parseInt(d.Wins)/parseInt(d.Matches))*100;
        teststr = "ID: "+ d.playerID + "-" + d.playerTag + ": " + winPercent;
        percentList.push({id:d.playerID, percent:winPercent});
        return teststr;
    }).forEach(teststr => console.log(teststr));

    percentList.sort(function(a, b){return b.percent - a.percent});
    console.log(percentList);

    percentList.forEach((element, index, array) => {
        let rankJSON = {
            "rankID": counter++,
            "playerID": element.id
        }

        addToList(rankJSON);
        console.log(rankJSON);
    });
}

function addToList(toPost) {
    const response = fetch("http://localhost:8080/ranking/add", {
        method: 'POST', 
        body: JSON.stringify(toPost), 
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getList() {
    fetch("http://localhost:8080/ranking/all")
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => printList(json))
        .catch(err => console.log(err));
}

function printList(data) {
    data.map(d => {
        let tableRow = document.createElement('tr');
        let rank = document.createElement('td');
        rank.innerText = d.rankID
        let playerName = document.createElement('td');
        playerName.innerText = d.player.playerTag;
        let playerWins = document.createElement('td');
        playerWins.innerText = d.player.Wins;
        let playerLoses = document.createElement('td');
        playerLoses.innerText = d.player.Loses;
        let playerMatches = document.createElement('td');
        playerMatches.innerText = d.player.Matches;

        tableRow.appendChild(rank);
        tableRow.appendChild(playerName);
        tableRow.appendChild(playerWins);
        tableRow.appendChild(playerLoses);
        tableRow.appendChild(playerMatches);

        return tableRow;
    }).forEach(tableRow => table.appendChild(tableRow));
}