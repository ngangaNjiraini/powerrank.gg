const id = new URLSearchParams(window.location.search).get('id');
window.onload = searchPlayer();

function searchPlayer() {
    fetch("http://localhost:8080/players/"+id)
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => printDetails(json))
        .catch(err => console.log(err));
}

function printDetails(data) {
    let playerTag = document.getElementById('tag');
    playerTag.innerText = data.playerTag;
}