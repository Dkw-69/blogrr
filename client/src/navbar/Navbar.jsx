import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'


const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()

    // handle logout
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        // check if there is token
        const token = user?.token
        // check if there is JWT token
        if(token){
            // decode the token
            const decodedToken = decode(token)
            // check if token has exp.
            if(decodedToken.exp * 5000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]) //when location changes, set the user


    return ( 

        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Blogr</Link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                {user ? (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li alt={user.result.name}><i class="far fa-user"></i></li>
                        <li className="user-name">{user.result.name}</li>
                        <li><Link to="/home"><button className="log-btn">Feed</button></Link></li> 
                        <li><button className="log-btn" onClick={logout}>Logout</button></li>
                    </ul>
                    ) : (
                    <ul>
                    <li id="nav-mobile" className="right hide-on-med-and-down">
                        <Link to="/auth"><button className="log-btn">Login</button></Link> 
                        </li>
                    </ul>
                    )}
            </div>
            {user ? (
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/home"><button className="log-btn">Feed</button></Link></li>
                <li><button id="logout-btn" className="log-btn" onClick={logout}>Logout</button></li>
            </ul>
            ):(
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/auth"><button className="log-btn">Login</button></Link> </li>
                </ul>
            )}
        </nav>
     );
}
 
export default Navbar;
