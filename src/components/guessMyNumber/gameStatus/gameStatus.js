import { useDispatch } from 'react-redux'

import { setScore } from "../features/numberSlice";

const GameStatus = (number, secretNumber, check) => {

  const dispatch = useDispatch();

  if (check) {
    if (number === secretNumber) {
      return 'CORRECT ヾ(≧▽≦*)o';
    } else if (number > secretNumber) {
      dispatch(setScore());

      return 'Too high (oﾟvﾟ)ノ';
    } else if (number < secretNumber) {
      dispatch(setScore());

      return 'Too low (‾◡◝)';
    }
  } else {
    return 'Write your number (≧∇≦)ﾉ'
  }
}

export default GameStatus;