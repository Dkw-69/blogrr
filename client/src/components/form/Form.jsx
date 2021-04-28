import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux' 
import { createPost, updatePost } from '../../actions/posts';
import Modal from 'react-modal'

Modal.setAppElement('#root')
const Form = ({ currentId, setCurrentId }) => {
    // find specific id
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

    // for modal
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [ postData, setPostData ] = useState({
        title: '',
        message: '',
        tags: '',
    })
    
    const dispatch = useDispatch()
    // get user form local storgae
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!currentId){
            // create a post
            dispatch(createPost({...postData, name: user?.result?.name}))  
        }
        else{
            // update a post
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
        }
        clear()
        setModalIsOpen(false)
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            title: '',
            message: '',
            tags: '',
        })
    }

    // if no logged in user
    if(!user?.result?.name){
        return(
            <div>
                <h6>Please sign in first to create or like a memory</h6>
            </div>
        )
    }
    
    return(
        <>
        <Modal 
        className="form-modal"
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
            <div className="container">
                <div className="row">
                    <form className="col s12">
                    <h6 className="form-blog-title">{currentId ? 'Editing' : 'Create'} a blog</h6>
                        <div className="row">
                        <div className="input-field col s6">
                            <input name='title' label='Title' id="input_text" type="text" data-length="10" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}></input>
                            <label htmlFor="input_text">Title</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <textarea name='message' label='Message' id="textarea2" className="materialize-textarea" data-length="750" value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} ></textarea>
                            <label htmlFor="textarea2">Message</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s6">
                            <input name='tags' label='Tags' id="input_text" type="text" data-length="10" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}></input>
                            <label htmlFor="input_text">Tags</label>
                        </div>
                        </div>
                        <button className="submit-btn" type='submit' onClick={handleSubmit}>submit</button>
                        <button className="clear-btn" onClick={clear}>clear</button>
                    </form>
                </div>
            </div>
        </Modal>
        <div class="fixed-action-btn">
            <button onClick={() => setModalIsOpen(true)} class="btn-floating btn-large waves-effect waves-dark add-btn">
                <i class="fas fa-plus"></i>
            </button>
        </div>
        </>
    )
}

export default Form