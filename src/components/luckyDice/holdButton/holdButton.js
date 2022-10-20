import { useDispatch, useSelector } from "react-redux";

import { changeCurrentPlayer, setTotalScore, clearCurrentScore, setWinner } from "../features/luckyDiceSlice";

const HoldButton = () => {

  const dispatch = useDispatch();
  const isGameOver = useSelector(state => state.luckyDice.isGameOver);

  return (
    <button 
      className="ld__btn ld__btn_hold"
      onClick={() => {
        dispatch(setTotalScore())
        dispatch(setWinner())
        dispatch(clearCurrentScore())
        dispatch(changeCurrentPlayer())
      }}
      disabled={isGameOver}
    >
      📥 Hold
    </button>
  )
}

export default HoldButton;