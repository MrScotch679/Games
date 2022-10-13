import { Link } from 'react-router-dom';

const BackToAllButton = () => {
  return (
    <Link to={'/'}>
      <button 
      className="btn-guess btn-guess_back"
      >
        Main page!
      </button>
    </Link>
    
  )
}

export default BackToAllButton;