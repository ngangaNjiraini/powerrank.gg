window.onload = searchPlayers();

function searchPlayers() {
    fetch("http://localhost:8080/players/all")
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => printPlayers(json))
        .catch(err => console.log(err));
}