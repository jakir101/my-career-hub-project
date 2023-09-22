import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oop!!</h2>
            <p>Page not Found</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;