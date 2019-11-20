const id = new URLSearchParams(window.location.search).get('id');
window.onload = searchPlayer();

let profile = document.getElementById('details-body')

function searchPlayer() {
    fetch("http://localhost:8080/players/" + id)
        .then(res => res.json())
        .then(json => printDetails(json))
        .catch(err => console.log(err));
}

function printDetails(data) {
    let newCard = document.createElement('div');
    newCard.className = "card profile-card-3";

    let profileBlock = document.createElement('div');
    profileBlock.className = "profile-thumb-block";
    profileBlock.style = "margin-top: -10px;"
    let avatarImage = document.createElement('img');
    avatarImage.src = data.Avatar;
    avatarImage.className = "profile";
    profileBlock.appendChild(avatarImage);

    let infoBlock = document.createElement('div');
    infoBlock.className = "card-content";
    let player = document.createElement('h2');
    player.style = "font-size: 35px;"
    player.innerText = data.playerTag
    let game = document.createElement('p');
    game.style = "font-size: 18px; margin-top: 10px;"
    game.innerText = "Super Smash Bros Ultimate";
    let Wins = document.createElement('p');
    Wins.style = "font-size: 20px; margin-top: 100px; color: black;"
    Wins.innerText = "Wins: " + data.Wins;
    let Loses = document.createElement('p');
    Loses.style = "font-size: 20px; margin-top: 10px; color: black;"
    Loses.innerText = "Loses: " + data.Loses;
    let Matches = document.createElement('p');
    Matches.style = "font-size: 20px; margin-top: 10px; color: black;"
    Matches.innerText = "Matches: " + data.Matches;

    let Region = document.createElement('p');
    Region.style = "font-size: 20px; margin-top: 10px; color: black;"
    Region.innerText = "Region: " + data.region.name;

    infoBlock.appendChild(player);
    infoBlock.appendChild(game);
    infoBlock.appendChild(Wins);
    infoBlock.appendChild(Loses);
    infoBlock.appendChild(Matches);
    infoBlock.appendChild(Region);

    //newCard.appendChild(background);
    newCard.appendChild(profileBlock);
    newCard.appendChild(infoBlock);

    profile.appendChild(newCard);
}

function updatePlayer() {
    window.location.href = "./update.html?id=" + id;
}

function deletePlayer() {
    const response = fetch("http://localhost:8080/players/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    $('#myModal').modal('show');
}