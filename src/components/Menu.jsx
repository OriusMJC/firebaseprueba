import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <div className='container'>
            <nav className="navbar navbar-dark bg-dark">
                <ul className='nav'>
                    <li className="nav-item">
                        <Link className='nav-link' to="/">Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/login">Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}