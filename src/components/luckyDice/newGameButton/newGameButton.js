import { useDispatch } from 'react-redux';

import { restartGame } from '../features/luckyDiceSlice';

const NewGameButton = () => {

  const dispatch = useDispatch();

  return (
    <button 
      className="ld__btn ld__btn_new"
      onClick={() => dispatch(restartGame())}
    > 
      🔄 New game 
    </button>
  )
}

export default NewGameButton;