'use strict'

import React, {Proptypes} from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred}) => (
    <div className="app">
        <Search/>
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions/>}
        {!!repos.length && 
        <Repos
            className="repos"
            title="Repositórios"
            repos={repos}
            />
        }
            <Repos
            className="starred"
            title="Favoritos"
            repos={repos}
            />
    </div>
)

export default AppContent