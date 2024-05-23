let team1 = [];
let team2 = [];

function startDrawing() {
    const nameDisplay = document.getElementById("nameDisplay");
    const team1ScoreDisplay = document.getElementById("team1Score");
    const team2ScoreDisplay = document.getElementById("team2Score");

  // Zerar os times e a exibição de nomes ao iniciar o sorteio
    team1 = [];
    team2 = [];
    team1ScoreDisplay.textContent = ``;
    team2ScoreDisplay.textContent = ``;
    nameDisplay.textContent = "";

    const namesInput = document.getElementById("nameInput").value;
    const names = namesInput.split(",").map(name => name.trim());

    const interval = setInterval(() => {
    if (names.length === 0) {
        clearInterval(interval);
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names.splice(randomIndex, 1)[0];

    if (team1.length < 5) {
        team1.push(name);
        team1ScoreDisplay.textContent = ` ${team1.join(", ")}`;
    } else if (team2.length < 5) {
        team2.push(name);
        team2ScoreDisplay.textContent = ` ${team2.join(", ")}`;
    }

    nameDisplay.textContent = name;
    }, 3000);
}