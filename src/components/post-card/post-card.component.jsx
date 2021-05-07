/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './post-card.styles.scss'
import React, { Component } from 'react';

class PostCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            saved: false
        }
    }
    
    componentDidUpdate() {
        var savedPostsId = JSON.parse(localStorage.getItem("savedPostsId"))
        if (this.state.saved){            
            localStorage.setItem("savedPostsId",savedPostsId ? JSON.stringify([...savedPostsId, this.props.id]) : JSON.stringify([this.props.id]))
        } else if (!this.state.saved ) {
            if (savedPostsId) savedPostsId = savedPostsId.filter((val) => val !== this.props.id)
            localStorage.setItem("savedPostsId",JSON.stringify(savedPostsId))

        }
    }
    
    componentDidMount() {
        var savedPostsId = JSON.parse(localStorage.getItem("savedPostsId"))
        this.setState({saved: savedPostsId.includes(this.props.id)})
    }
    
    
    render() {
        return (
            <div className="post-card">
            <div className="content">
    
            <div className="save-btn">
            <i onClick={() => this.setState({saved: !this.state.saved})} className={`fa${this.state.saved ? 's' :'r' } fa-bookmark`}></i>
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
        );
    }
}

export default PostCard;