import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux'
import { getPosts } from '../../actions/posts'
import Posts from '../posts/Posts'
import Form from '../form/Form'
import Navbar from '../../navbar/Navbar';


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    // dispatch an action
    useEffect(() => {
        dispatch(getPosts())
        // refresh post too using currentID
    }, [currentId, dispatch])

    return ( 
        <>
        <Navbar className="nav"/>
            <div className="container">
                <div>
                    <Posts setCurrentId={setCurrentId}/>
                </div>
                <div>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </div>
            </div>
        </>
     );
}
 
export default Home;