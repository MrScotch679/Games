import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from '../spinner/Spinner';

const GuessMyNumber = lazy(() => import('../guessMyNumber/guessMyNumber'));
const MainPage = lazy(() => import('../mainPage/mainPage'));
const ErrorPage = lazy(() => import('../errorPage/errorPage'));

const App = () => {
  return (
    <HashRouter basename="">
      <main className="app">
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="guess-my-number" element={<GuessMyNumber/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Suspense>
      </main>
    </HashRouter>
    
  )
}

export default App;
