const id = new URLSearchParams(window.location.search).get('id');
window.onload = searchPlayer();
let wins = document.getElementById('win-rec');
let loses = document.getElementById('lose-rec');
let region = document.getElementById('player-region');

function searchPlayer() {
    fetch("http://localhost:8080/players/" + id)
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => loadDetails(json))
        .catch(err => console.log(err));
}

function loadDetails(data) {
    let tagHeader = document.getElementById('tag-title');
    tagHeader.innerText = "Update Player - " + data.playerTag;
    wins.value = data.Wins;
    loses.value = data.Loses;
    region.value = data.region.name;
}

function submitDetails() {
    let rID;

    let matches = parseInt(wins.value) + parseInt(loses.value);
    let avaterID = Math.floor(Math.random() * 66) + 10;

    if (region.value === "North England") {
        rID = 1
    } else if (region.value === "South England") {
        rID = 2
    } else if (region.value === "Wales") {
        rID = 3
    } else if (region.value === "Scotland") {
        rID = 4
    } else if (region.value === "Northern Ireland") {
        rID = 5
    } else if (region.value === "Republic of Ireland") {
        rID = 6
    }

    let updatedDetails = {
        "Wins": wins.value,
        "Loses": loses.value,
        "Matches": matches,
        "regionID": rID
    }

    const response = fetch("http://localhost:8080/players/update/"+ id, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(updatedDetails), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(updatedDetails);

    $('#myModal').modal('show');
}