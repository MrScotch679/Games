import { useDispatch } from "react-redux";
import { restartGame } from "../features/numberSlice";
import createSecretNumber from "../features/createSecretNumber";
import { setSecretNumber } from "../features/numberSlice";

const RestartButton = () => {
  const dispatch = useDispatch()

  return (
    <button 
      className="btn-guess again"
      onClick={() => {
        dispatch(restartGame())
        dispatch(setSecretNumber(createSecretNumber()))
      }}
    >
      Again!
    </button>
  )
}

export default RestartButton;