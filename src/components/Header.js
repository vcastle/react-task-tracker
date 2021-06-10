import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Button from './Button';

const Header = ({title, onAdd, showAdd }) => {
  const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>

            {location.pathname === '/react-task-tracker/' &&
               <Button 
                color={showAdd ? 'crimson' : '#009957'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} />
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Exercise Tasks',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header
