import { useSelector } from "react-redux";

import './players.scss';

const Players = () => {

  const players = useSelector(state => state.luckyDice.players);
  const currentPlayer = useSelector(state => state.luckyDice.currentPlayer);

  const createPlayer = (players) => {
    const player = players.map((item, i) => {

      let playerClass = `ld__player ld__player_${item.id}`;
      let playerName = `Playes ${item.id + 1}`;
      if (currentPlayer === i) {
        playerClass += ' ld__player_active';
      }
      if (item.isWinner) {
        playerClass += ' ld__player_winner';
        playerName = 'Winner!'
      }

      return (
        <section 
          className={playerClass}
          key={item.id}
        >
          <h2 className="ld__name">{playerName}</h2>
          <p className="ld__score">{item.totalScore}</p>
          <div className="ld__current">
            <p className="ld__current-label">Current</p>
            <p className="ld__current-score">{item.currentScore}</p>
          </div>
        </section>
      )
    })

    return (
      <>
        {player}
      </>
    )
  }

  return (createPlayer(players));
}

export default Players;