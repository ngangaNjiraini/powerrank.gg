var table = document.getElementById("rank-table");
window.onload = search();

function search() {
    fetch("localhost:8080/ranking/all")
        .then(res => res.json())
        .then(json => output(json))
        .catch(err => console.log(err));
}
