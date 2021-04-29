
import PropTypes from "prop-types";
const Navigation = ({onPageChange}) => {
    return (
        <header className= "header pt-4">
            <h2> Header </h2>
            <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                    className="nav-link active"
                    onClick={() => onPageChange('Auth')}
                    > Auth
                    </button>
                </li>
            
                <li className="nav-item">
                    <button
                    className="nav-link active"
                    onClick={() => onPageChange('todoHome')}
                    >Todo Home
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() => onPageChange('Counter')}
                    >
                    Counter Page
                    </button>
                </li>
            </ul>
            </nav>
        </header>
    )
}
Navigation.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    pages : PropTypes.func.isRequired,
}

export default Navigation;