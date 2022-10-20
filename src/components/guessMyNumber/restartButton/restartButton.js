import { useDispatch } from "react-redux";
import { restartGame, setSecretNumber } from "../features/numberSlice";
import createSecretNumber from "../features/createSecretNumber";

const RestartButton = () => {
  const dispatch = useDispatch();

  return (
    <button 
      className="btn-guess btn-guess_again"
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