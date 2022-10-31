import { Link } from 'react-router-dom';

const BackToAllButton = () => {
  return (
    <Link to={'/'}>
      <button 
      className="ld__btn ld__btn_back"
      >
       🖥 Main page!
      </button>
    </Link>
    
  )
}

export default BackToAllButton;