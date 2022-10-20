import { useDispatch } from "react-redux";

import { setNumberOnDice, changeCurrentScore } from "../features/luckyDiceSlice";
import randomNumber from "../features/randomNumber";

const RollDiceButton = () => {

  const dispatch = useDispatch();

  return (
    <button 
      className="ld__btn ld__btn_roll"
      onClick={() => {
        dispatch(setNumberOnDice(randomNumber()))
        dispatch(changeCurrentScore())
      }}
    >
      🎲 Roll dice
    </button>
  )
}

export default RollDiceButton;