import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSecretNumber } from "../features/numberSlice";
import createSecretNumber from "../features/createSecretNumber";

import './secretNumber.scss';

const SecretNumber = () => {

  const dispatch = useDispatch();
  const gameStatus = useSelector(state => state.guessNumber.gameStatus);
  const secretNumber = useSelector(state => state.guessNumber.secretNumber);

  useEffect(() => {
    dispatch(setSecretNumber(createSecretNumber()));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="number">{gameStatus === 'play' ? '?' : secretNumber}</div>
  )
}

export default SecretNumber;
