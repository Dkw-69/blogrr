import React, { useState } from 'react';
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import Modal from 'react-modal'
import Form from '../../form/Form';


// Modal.setAppElement('#root')
const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    // for modal
    const [modalIsOpen,setModalIsOpen] = useState(false);
    // get user form local storgae
    const user = JSON.parse(localStorage.getItem('profile'))


    // like sub component
    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
           ? (
         <><i className="far fa-heart"></i>&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
         ) : (
          <><i className="far fa-heart"></i>&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
       );
    }
    
    return <><i className="far fa-heart"></i>&nbsp;Like</>;
   };

    return(
        <div className="row">
            <div className="col m12 s12">
                <article className="article">
                    <h5 className="article-title">{post.title}</h5>
                    <h6 className="article-creator">by {post.name} - {moment(post.createdAt).fromNow()}</h6>
                    <hr/>
                    <p className="article-body">{post.message}</p>
                    <p><small className="article-tags">{post.tags.map((tag) => `#${tag} `)}</small></p>
                        <button className="like-icon" onClick={() => dispatch(likePost(post._id))}>
                            <Likes/>
                        </button> 
                    <div className="article-icons">
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={{
                            overlay:{
                                background: 'grey'
                            },
                            content: {
                                margin: 40,
                                padding: 35
                            }
                        }}
                        >
                    <Form/> 
                    </Modal>
                        {(user?.result?._id === post?.creator) && (
                            <button className="article-edit-btn" onClick={() => {
                                setCurrentId(post._id)
                                setModalIsOpen(true)
                                }}>
                                <i className="fas fa-pen-alt"></i>
                            </button>
                        )}
                        {(user?.result?._id === post?.creator) && (
                            <button className="article-delete-btn" onClick={() => dispatch(deletePost(post._id))}>
                            <i className="fas fa-trash"></i>
                            </button>
                        )}
                    </div>
                </article>
            </div>
        </div>
    )
}
// () => setCurrentId(post._id)
export default Post