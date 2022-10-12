import { Link } from 'react-router-dom';

import './backToAllButton.scss';

const BackToAllButton = () => {
  return (
    <Link to={'/'}>
      <button 
      className="btn-guess back"
      >
        Main page!
      </button>
    </Link>
    
  )
}

export default BackToAllButton;