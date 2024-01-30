import React from 'react';
import { useState } from 'react';
import "./tictactoe.css"
function TicTacToe() {
    const [items, setItems] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [player, setPlayer] = useState(0);
    const [stop, setStop] = useState(false);

    const winner = (temp) => {
        for (let i = 0; i < 3; i++) {
            if ((temp[0][i] != "" && temp[1][i] != "" && temp[2][i] != "") && (temp[0][i] == temp[1][i] && temp[1][i] == temp[2][i])) {
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            if ((temp[i][0] != "" && temp[i][1] != "" && temp[i][2] != "") && (temp[i][0] == temp[i][1] && temp[i][1] == temp[i][2])) {
                return true;
            }
        }
        if ((temp[0][0] != "" && temp[1][1] != "" && temp[2][2] != "") && (temp[0][0] == temp[1][1] && temp[1][1] == temp[2][2])) {
            return true
        }
        if ((temp[0][2] != "" && temp[1][1] != "" && temp[2][0] != "") && (temp[0][2] == temp[1][1] && temp[1][1] == temp[2][0])) {
            return true
        }
    }

    const handleClick = (r, c) => {
        let temp = [...items];
        if (temp[r][c] === "" && !stop) {
            if (player == 0) {
                temp[r][c] = 'o'
            } else {
                temp[r][c] = 'x'
            }
            setItems(temp);
            setPlayer((prev) => !prev)
            let a = winner(temp);
            if (a) {
                setStop(true)
                if (temp[r][c] == 'o') {
                    alert("player1 won");

                } else {
                    alert("player2 won")
                }
            }
        }

    }
    return (
        <div>
            <h1>TicTacToe</h1>
            <div className='grid'>
                {items.map((row, rowIndex) => (
                    <div key={`${rowIndex}`} className="row">
                        {row.map((col, colIndex) => (
                            <div className='cell' onClick={() => handleClick(rowIndex, colIndex)}>{items[rowIndex][colIndex]}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='player'>Player {player + 1}</div>
        </div>
    )
}

export default TicTacToe