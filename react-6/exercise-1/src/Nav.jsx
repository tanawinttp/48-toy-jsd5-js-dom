import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <ul>
            <li><Link to={'/'}>Main</Link></li>
           <li><Link to={'login'}>Login</Link></li>
             <li><Link to={'/signup'}>Signup</Link></li>
            <li><Link to={'/error'}>Error</Link></li>
        </ul>
    )
}

export default Navbar