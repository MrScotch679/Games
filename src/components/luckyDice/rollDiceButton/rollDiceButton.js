import { useDispatch, useSelector } from "react-redux";

import { setNumberOnDice, changeCurrentScore, changeCurrentPlayer, clearCurrentScore } from "../features/luckyDiceSlice";
import randomNumber from "../features/randomNumber";

const RollDiceButton = () => {

  const dispatch = useDispatch();
  const isGameOver = useSelector(state => state.luckyDice.isGameOver);

  const forcePlayerChange = () => {
    const randomNumberf = randomNumber();

    dispatch(setNumberOnDice(randomNumberf))

    if (randomNumberf === 1) {
      dispatch(clearCurrentScore())
      dispatch(changeCurrentPlayer())
    } else {
      dispatch(changeCurrentScore())
    }
  }

  return (
    <button 
      className="ld__btn ld__btn_roll"
      onClick={() => forcePlayerChange()}
      disabled={isGameOver}
    >
      🎲 Roll dice
    </button>
  )
}

export default RollDiceButton;