var list = document.getElementById("playercards");
window.onload = search();

function search() {
    fetch("http://localhost:8080/players/all")
        .then(res => res.json())
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
        image.src = "https://cdn.atomix.vg/wp-content/uploads/2018/12/LogoSuperSmashBrosUltimate-1024x436.jpg";
        image.className = "background";
        background.appendChild(image);

        var profileBlock = document.createElement('div');
        profileBlock.className = "profile-thumb-block";
        var avatarImage = document.createElement('img');
        avatarImage.src = data.Avatar;
        avatarImage.className = "background";
        profileBlock.appendChild(avatarImage);

        var infoBlock = document.createElement('div');
        infoBlock.className = "card-content";
        var player = document.createElement('h2');
        player.innerText = d.playerTag
        var game = document.createElement('p');
        game.innerText = "Super Smash Bros Ultimate";
        var viewProfile = document.createElement('a');
        viewProfile.href = "profile.html";
        viewProfile.style = "margin-top: 16px; text-decoration-line: none;";
        viewProfile.innerText = "View profile";
        infoBlock.appendChild(player);
        infoBlock.appendChild(game);
        infoBlock.appendChild(viewProfile);

        newCard.appendChild(background);
        newCard.appendChild(profileBlock);
        newCard.appendChild(infoBlock);

        column.appendChild(newCard);
    }).forEach(column => list.appendChild(column));
}