let table = document.getElementById("rank-table");
window.onload = search();

function search() {
    fetch("http://localhost:8080/ranking/all")
        .then(res => res.json())
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