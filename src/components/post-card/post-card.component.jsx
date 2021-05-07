/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './post-card.styles.scss'

function PostCard(props) {
    const [saved, editSaved] = React.useState(false)
    const [id,] = React.useState(props.id)

    React.useEffect(() => {
        return () => {
            var savedPostsId = JSON.parse(localStorage.getItem("savedPostsId"))
            editSaved(savedPostsId.includes(id))
        }
    }, [saved, id])
    
    React.useEffect(() => {
        var savedPostsId = JSON.parse(localStorage.getItem("savedPostsId"))
        if (saved){            
            localStorage.setItem("savedPostsId",savedPostsId ? JSON.stringify([...savedPostsId, id]) : JSON.stringify([id]))
        } else if (!saved ) {
            if (savedPostsId) savedPostsId = savedPostsId.filter((val) => val !== id)
            localStorage.setItem("savedPostsId",JSON.stringify(savedPostsId))

        }
    }, [saved, id])

    return (
        <div className="post-card">
        <div className="content">

        <div className="save-btn">
        <i onClick={() => editSaved(!saved)} className={`fa${saved ? 's' :'r' } fa-bookmark`}></i>
        </div>
        <div className="text-content">
            <h3>Introduction to Bootstrap</h3>
            <div className="text-post--info">
                <p>By Sathak Uzham</p>
                <p>17 July 2021</p>
            </div>
            <a className="btn btn-primary txt-bold">READ MORE</a>
        </div>
        </div>

    </div>
    )
}



export default PostCard