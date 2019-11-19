const tag = new URLSearchParams(window.location.search).get('tag');
window.onload = loadTag();

function loadTag() {
    let tagHeader = document.getElementById('tag-title');
    tagHeader.innerText = "Add Player - " + tag;
    console.log(tag);
}


function submitDetails() {
    let wins = document.getElementById('win-rec');
    let loses = document.getElementById('lose-rec');
    let region = document.getElementById('player-region');
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

    let playerDetails = {
        "playerTag": tag,
        "Wins": wins.value,
        "Loses": loses.value,
        "Matches": matches,
        "Avatar": "https://randomuser.me/api/portraits/men/" + avaterID + ".jpg",
        "regionID": rID
    }

    const response = fetch("http://localhost:8080/players/add", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(playerDetails), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(playerDetails);

    $('#myModal').modal('show');
}