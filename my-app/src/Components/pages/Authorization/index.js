import { Link, Route, Switch } from 'react-router-dom';
import SignInForm from '../../forms/sign-in-form/SignInForm';
function Auth () {
    return (
        <div className="row mt-4"> 
            <div className="col-12">
                <nav className="nav nav-pills flex-column flex-sm-row">
                <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/authorization/sign-in">Sign In </Link>
                <Link className="flex-sm-fill text-sm-center nav-link" to='/authorization/sign-up'>Sign Up</Link>
                </nav>
            </div>
        </div>
        <div className="row">
        </div>
    );
}


export default Auth;