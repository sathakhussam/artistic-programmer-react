/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './post-card.styles.scss'

function PostCard() {
    const [saved, editSaved] = React.useState(false)
    return (
        <div className="post-card">
            <div className="content">
                <div className="save-btn">
                <i onClick={() => editSaved(!saved)} class={`fa${saved ? 's' : 'r' } fa-bookmark`}></i>
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