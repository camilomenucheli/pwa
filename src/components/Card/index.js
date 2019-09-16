import React, { Component } from 'react'
import api from '../../services/api'

export default class Card extends Component {
    componentDidMount() {
        this.loadPost()
    }

    loadPost = async () => {
        try {
            const response = await api.get('/posts')

            console.log(response)

        } catch (error) {
            console.log(api)
            console.log('====>', error)
        }
        
    }
    
    render() {
        return <h1>teste dnv</h1>
    }
}