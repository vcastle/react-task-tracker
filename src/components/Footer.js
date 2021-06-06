import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()} - Valeria Castillo</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
