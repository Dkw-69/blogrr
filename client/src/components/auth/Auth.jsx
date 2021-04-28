import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signup, login } from '../../actions/auth'


// set initial state
const initialState = { name: '', email: '', password: '', confirmPassword: '' }
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(isSignup){
            // pass history to dispatch to navigate when sth. happens
            dispatch(signup(formData, history))
            // redirect
            history.push('/home')
        }
        else{
            dispatch(login(formData, history))
        }
    }

    const handleChange = (e) => {
        // target data from input and update formData
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    return ( 
        <div className="container">
                <h5>{isSignup ? "Sign Up" : "Log In"}</h5>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div>
                        {
                            isSignup && (
                                <div className="input-field">
                                    <input className="input-field" name="name" autoFocus required onChange={handleChange}></input>
                                    <label htmlFor="name">Name</label>
                                </div>
                            )
                        }
                        <div className="input-field">
                            <input className="input-field" name="email" autoFocus required onChange={handleChange} type="email"></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input className="input-field" name="password" autoFocus required onChange={handleChange} type="password"></input>
                            <label htmlFor="password">Password</label>
                        </div>
                        {isSignup && 
                        <div className="input-field">
                            <input name="confirmPassword" autoFocus required onChange={handleChange} type="password"></input>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        }
                    </div>
                    <button className="auth-submit-btn" type="submit">
                        {isSignup ? 'Sign Up' : 'Log In'}
                    </button>
                    <div>
                        <button className="auth-switch-btn" onClick={switchMode}>
                            {isSignup ? 'Already have an account? Log In' : 'Dont have an account? Sign Up'}
                        </button>
                    </div>
                </form>
        </div>
     );
}
 
export default Auth;