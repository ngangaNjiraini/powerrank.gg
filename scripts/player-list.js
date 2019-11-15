var playerlist = document.getElementById("players");
window.onload = search();

function search() {
    fetch("http://localhost:8080/players/all")
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => printPlayers(json))
        .catch(err => console.log(err));
}

function printPlayers(data) {
    data.map(d => {
        var column = document.createElement('div');
        column.className = "col-md-4";

        var newCard = document.createElement('div');
        newCard.className = "card profile-card-3";

        var background = document.createElement('div');
        background.className = "background-block";
        var image = document.createElement('img');
        image.src = "images/Smash_Ball(fix).png";
        image.className = "background";
        background.appendChild(image);

        var profileBlock = document.createElement('div');
        profileBlock.className = "profile-thumb-block";
        var avatarImage = document.createElement('img');
        avatarImage.src = d.Avatar;
        avatarImage.className = "profile";
        profileBlock.appendChild(avatarImage);

        var infoBlock = document.createElement('div');
        infoBlock.className = "card-content";
        var player = document.createElement('h2');
        player.style = "font-size: 35px;"
        player.innerText = d.playerTag
        var game = document.createElement('p');
        game.style = "font-size: 18px; margin-top: 10px;"
        game.innerText = "Super Smash Bros Ultimate";
        var viewProfile = document.createElement('a');
        viewProfile.addEventListener('click', () => window.location.href = './profile.html?id='+ d.playerID)
        viewProfile.style = "text-decoration-line: none; cursor: pointer;";
        viewProfile.innerText = "View profile";
        infoBlock.appendChild(player);
        infoBlock.appendChild(game);
        infoBlock.appendChild(viewProfile);

        newCard.appendChild(background);
        newCard.appendChild(profileBlock);
        newCard.appendChild(infoBlock);

        column.appendChild(newCard);
        return column;
    }).forEach(column => playerlist.appendChild(column));
}


