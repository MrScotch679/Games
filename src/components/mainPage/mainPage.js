import GameCards from './gameCard/gameCard';

import './mainPage.scss';

const MainPage = () => {
  return (
    <div className="container main-page">
      <div className="main-page__title">
        Game pack
      </div>
      <div className='main-page__subtitle'>
        You wanna play?! LET'S PLAY!
      </div>
      <GameCards/>
    </div>
  )
}

export default MainPage;