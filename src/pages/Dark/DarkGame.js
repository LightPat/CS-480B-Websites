import { Link } from "react-router-dom"

let goldBucks = 0
let silverBucks = 0
let bronzeBucks = 0

function DarkGame() {
    return (
        <div className="centered">
            <div className="dark-game-header">
                <h1>Cob's Soulo Game</h1>
                <Link to="/darkloginbonus">
                    <button>Login Bonus</button>
                </Link>
                <button>Store</button>
                <button onClick={recharge}>Recharge</button>
            </div>

            <div className="dark-game" id="game">
                <button onClick={game}>
                    Click Me To Play! :)
                </button>
            </div>

            <div className="dark-cob-bucks">
                <h2>CobBucks</h2>
                <p id="gold">{goldBucks}</p>
                <p id="silver">{silverBucks}</p>
                <p id="bronze">{bronzeBucks}</p>
            </div>

            <div className="dark-login-bonus">
                <h2>Login Bonus</h2>
                <p>Claim your login bonus 1 more day to unlock dark mode!</p>
            </div>
        </div>
    )
}

function game() {
    // If the random number is greater than 5 the user wins
    // The random number is between 0 and 10
    let roll = Math.random() * 10;

    if (roll > 8) {
        goldBucks++;
        document.getElementById('gold').innerHTML = goldBucks;
        document.getElementById('game').style.backgroundColor = "gold";
        alert("You won gold bucks!")
        return;
    }
    if (roll > 5) {
        silverBucks++;
        document.getElementById('silver').innerHTML = silverBucks;
        document.getElementById('game').style.backgroundColor = "silver";
        alert("You won silver bucks!")
        return;
    }

    if (roll > 3) {
        bronzeBucks++;
        document.getElementById('bronze').innerHTML = bronzeBucks;
        document.getElementById('game').style.backgroundColor = "#cd7f32";
        alert("You won bronze bucks!")
        return;
    }

    document.getElementById('game').style.backgroundColor = "white";
    alert("You lost! :(");
}

function recharge() {
    goldBucks++;
    silverBucks++;
    bronzeBucks++;
    document.getElementById('bronze').innerHTML = bronzeBucks;
    document.getElementById('silver').innerHTML = silverBucks;
    document.getElementById('gold').innerHTML = goldBucks;
}

export default DarkGame