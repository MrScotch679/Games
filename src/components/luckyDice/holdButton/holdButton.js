import { useDispatch } from "react-redux";

import { changeCurrentPlayer, setTotalScore } from "../features/luckyDiceSlice";

const HoldButton = () => {

  const dispatch = useDispatch();

  return (
    <button 
      className="ld__btn ld__btn_hold"
      onClick={() => {
        dispatch(changeCurrentPlayer())
        dispatch(setTotalScore())
      }}
    >
      📥 Hold
    </button>
  )
}

export default HoldButton;