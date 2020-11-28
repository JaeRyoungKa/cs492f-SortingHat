import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            Msg:''
        }
    }

    componentDidMount() {
        axios.get('http://iloveassignment.com')
            .then(response => {
                console.log(response)
                this.setState({posts:response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({Msg: 'Error retrieving data'})
            })
    }
    
    render() {
        const {posts, Msg} = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post}</div>) :
                        null

                }
                { Msg ? <div> {Msg}</div>: null}
            </div>
        )
    }
}

export default PostList