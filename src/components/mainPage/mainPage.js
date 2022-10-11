import { useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import './mainPage.scss'

const MainPage = () => {
  
  const games = useSelector(state => state.gameSlice.games) 

  console.log(games)

  const createItems = (some) => {
    const items = some.map((item) => {
      return (
        <Card key={item.gameName} style={{ width: '33%' }}>
          <Card.Img variant="top" src="https://nationaltoday.com/wp-content/uploads/2021/10/National-Dice-Day-640x514.jpg" />
          <Card.Body>
            <Card.Title>{item.gameName}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Rules</Accordion.Header>
                <Accordion.Body>
                  {item.guide}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="primary">{item.gameName}</Button>
          </Card.Body>
        </Card>
      )
    })

    return (
      <>
        {items}
      </>
    )
  }

  const items = createItems(games)

  console.log(items)

  return (
    <div className="container">
      <div className="main-page-title">
        GameTitle
      </div>
      <div className='wrapper'>
        {items}
      </div>

    </div>
  )
}

export default MainPage;