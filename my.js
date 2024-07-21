
function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbw81FouUvEYK5fqbvkiEf1-EuLjkToWZtSS93nIvzaGrq9ZrEiBP5gZrIll0Cn2-8lZ6A/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener("click", testGS);