import Dice from './dice/dice';
import './luckyDice.scss';

const LuckyDice = () => {
 
  return (
    <div className='ld'>

      <div className='ld__wrapper'>

        <section className="ld__player ld__player_0 ld__player_active">
          <h2 className="ld__name" id="name_0">Player 1</h2>
          <p className="ld__score" id="score_0">43</p>
          <div className="ld__current">
            <p className="ld__current-label">Current</p>
            <p className="ld__current-score" id="current_0">0</p>
          </div>
        </section>

        <section className="ld__player ld__player_1">
          <h2 className="ld__name" id="name_1">Player 2</h2>
          <p className="ld__score" id="score_1">24</p>
          <div className="ld__current">
            <p className="ld__current-label">Current</p>
            <p className="ld__current-score" id="current_1">0</p>
          </div>
        </section>

        <Dice/>
        <button className="ld__btn ld__btn_new">🔄 New game</button>
        <button className="ld__btn ld__btn_roll">🎲 Roll dice</button>
        <button className="ld__btn ld__btn_hold">📥 Hold</button>
        
      </div>

    </div>
  )
}

export default LuckyDice;