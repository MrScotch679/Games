import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../mainPage/mainPage'));
const GuessMyNumber = lazy(() => import('../guessMyNumber/guessMyNumber'));
const LuckyDice = lazy(() => import('../luckyDice/luckyDice'));
const ErrorPage = lazy(() => import('../errorPage/errorPage'));

const App = () => {
  return (
    <HashRouter basename="">
      <main className="app">
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="guess-my-number" element={<GuessMyNumber/>}/>
              <Route path="lucky-dice" element={<LuckyDice/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Suspense>
      </main>
    </HashRouter>
  )
}

export default App;
