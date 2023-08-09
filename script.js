const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    });
});

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = 'lightgreen';
            cells[b].style.backgroundColor = 'lightgreen';
            cells[c].style.backgroundColor = 'lightgreen';
            cells.forEach(cell => cell.removeEventListener('click', cellClick));
            alert(`${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
        }
    }
}