import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import './gameCard.scss';

const GameCards = () => {

  const games = useSelector(state => state.gameSlice.games);

  const createItems = (data) => {
    const items = data.map((item) => {
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

  return(createItems(games));
}

export default GameCards;