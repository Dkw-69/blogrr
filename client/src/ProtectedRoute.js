import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { Redirect, useLocation, useHistory} from 'react-router-dom'
import { Route } from 'react-router';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    
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
        <Route {...rest} render={ props => {
            return user ? <Component {...props}/> : <Redirect to="/" />
        }}/>
     );
}
 
export default ProtectedRoute;
