const players = [
    { rank: 1, name: "Akshi", score: 20 },
    { rank: 2, name: "Aishu", score: 30 },
    { rank: 3, name: "ABC", score: 10 },
    { rank: 4, name: "Alan", score: 30 },
    { rank: 5, name: "Potter", score: 40 },
    { rank: 6, name: "Tobi", score: 50 }
];

function loadLeaderboard() {
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = "";

    players.forEach(player => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${player.rank}. ${player.name}</span> <span>${player.score}</span>`;
        leaderboardList.appendChild(listItem);
    });
}

// Load leaderboard on page load
window.onload = loadLeaderboard;
