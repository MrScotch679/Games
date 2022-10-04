import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSecretNumber } from "../features/numberSlice";

import './secretNumber.scss';

const SecretNumber = () => {

  const dispatch = useDispatch();
  const secretNumber = useSelector(state => state.guessNumber.secretNumber)

  const createSecretNumber = () => {
    return Math.floor(Math.random() * 20 + 1);
  }

  useEffect(() => {
    dispatch(setSecretNumber(createSecretNumber()))
  }, []);

  return (
    <div className="number">{secretNumber}</div>
  )
}

export default SecretNumber;