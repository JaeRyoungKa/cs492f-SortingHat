import React, { Component } from 'react'
import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            domain: '',
            word: '',
            degree: '',
            userInfo: { 'Expertise': '', 'Age': '', 'Level': '' },
            alt: '',
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        const agent = new https.Agent({
            rejectUnauthorized: false
        });
        axios.post('http://143.248.247.64:52005/predict', this.state, { httpsAgent: agent, headers: {'crossDomain': true} })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { domain, word, degree, userInfo, alt } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="domain" value={domain} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="word" value={word} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="degree" value={degree} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="userInfo" value={userInfo} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="alt" value={alt} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm