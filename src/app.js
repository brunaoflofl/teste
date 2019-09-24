'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

//marcação completa da aplicação
class App extends Component  {
    constructor(){
        super()
        this.state = {
            userinfo: {
                username: 'Fernando Daciuk',
                repos: 12,
                followers: 10,
                followings: 10

            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]

        }
    }
    render(){
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
        />
    }
}

export default App