import React, { Component } from 'react'
import './card-container.styles.scss'
import PostCard from '../post-card/post-card.component'
import { v4 as uuidv4 } from 'uuid';


class CardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [{id: uuidv4()}, {id: uuidv4()}, {id: uuidv4()}]
        }
    }


    render() {
        return (
            <div className="card-container">
                {
                    this.state.posts.map((post, idx)=> (
                        <PostCard key={post.id} {...post}/>
                    ))
                }
            </div>
        )
    }
}

export default CardComponent