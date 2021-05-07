import React, { Component } from 'react'
import './card-container.styles.scss'
import PostCard from '../post-card/post-card.component'
import { v4 as uuidv4 } from 'uuid';


class CardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [{id: "80e0cbe2-21a2-4e02-8b4c-57de131a9b50"}, {id: "3f9e38b7-7815-40f7-a932-a8c87f0bd45e"}, {id: "eee3744d-252b-4b6c-815d-80faa3c871fa"}]
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