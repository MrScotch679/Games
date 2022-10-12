import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import './mainPage.scss';

const MainPage = () => {
  
  const games = useSelector(state => state.gameSlice.games)

  const createItems = (some) => {
    const items = some.map((item) => {
      return (
        <Card key={item.gameName}>
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.gameName}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How to play</Accordion.Header>
                <Accordion.Body>
                  {item.guide}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Link to={item.linkTo}>
              <Button 
                variant="primary"
                >
                {item.gameName}
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )
    })

    return (
      <div className='game-wrapper'>
        {items}
      </div>
    )
  }

  const items = createItems(games)

  console.log(items)

  return (
    <div className="container main-page">
      <div className="main-page__title">
        Game pack
      </div>
      <div className='main-page__subtitle'>
        You wanna play?! LET'S PLAY!
      </div>
      {items}

    </div>
  )
}

export default MainPage;