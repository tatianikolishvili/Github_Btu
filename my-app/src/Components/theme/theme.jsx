import propTypes from "prop-types";
import './theme.css'

function Theme({children, page }) {
    return (
        <div className="theme-container">
            {children}
        </div>
    )
    Theme.propTypes = {
        page : propTypes.string.isRequired,
    }
}

export default Theme;