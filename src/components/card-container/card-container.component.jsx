import React, { Component } from 'react'
import './card-container.styles.scss'
import PostCard from '../post-card/post-card.component'

class CardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="card-container">
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        )
    }
}

export default CardComponent