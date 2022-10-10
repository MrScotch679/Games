import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from '../spinner/Spinner';

const GuessMyNumber = lazy(() => import('../guessMyNumber/guessMyNumber'))

const App = () => {
  return (
    <HashRouter basename="">
      <main className="app">
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" />
              <Route path="/guess-my-number" element={<GuessMyNumber/>}/>
            </Routes>
          </Suspense>
      </main>
    </HashRouter>
    
  )
}

export default App;
