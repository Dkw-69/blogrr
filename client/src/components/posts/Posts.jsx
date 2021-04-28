import React from 'react';
// use selector to help us get data from global redux store
import { useSelector } from 'react-redux' 
import Post from './post/Post'


const Posts = ({ setCurrentId }) => {
    
    // initialize as a hook
    const posts = useSelector((state) => state.posts)
    // console.log(posts)
    
    return(
        !posts.length ? (
            <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
        ) : (
                <>
                    {posts.map((post) => (
                        <div className="col s12 m12" key={post._id}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </div>
                    ))}
                </>
        )
    )
}

export default Posts