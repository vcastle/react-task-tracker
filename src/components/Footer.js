import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date().getFullYear();
    
    return (
        <footer>
            <p>Copyright &copy; {date} - Valeria Castillo</p>
            <Link to="/react-task-tracker/about">About</Link>
        </footer>
    )
}

export default Footer
