import { useDispatch } from "react-redux";

import { changeCurrentPlayer, setTotalScore, clearCurrentScore } from "../features/luckyDiceSlice";

const HoldButton = () => {

  const dispatch = useDispatch();

  return (
    <button 
      className="ld__btn ld__btn_hold"
      onClick={() => {
        dispatch(setTotalScore())
        dispatch(clearCurrentScore())
        dispatch(changeCurrentPlayer())
      }}
    >
      📥 Hold
    </button>
  )
}

export default HoldButton;