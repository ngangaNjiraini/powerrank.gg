var table = document.getElementById("rank-table");
window.onload = search();

function search() {
    fetch("http://localhost:8080/ranking/all")
        .then(res => res.json())
        .then(json => printList(json))
        .catch(err => console.log(err));
}

function printList(data) {
    data.map(d => {
        var tableRow = document.createElement('tr');
        var rank = document.createElement('td');
        rank.innerText = d.rankID
        var playerName = document.createElement('td');
        playerName.innerText = d.player.playerTag;
        var playerWins = document.createElement('td');
        playerWins.innerText = d.player.Wins;
        var playerLoses = document.createElement('td');
        playerLoses.innerText = d.player.Loses;
        var playerMatches = document.createElement('td');
        playerMatches.innerText = d.player.Matches;

        tableRow.appendChild(rank);
        tableRow.appendChild(playerName);
        tableRow.appendChild(playerWins);
        tableRow.appendChild(playerLoses);
        tableRow.appendChild(playerMatches);

        return tableRow;
    }).forEach(tableRow => table.appendChild(tableRow));
}