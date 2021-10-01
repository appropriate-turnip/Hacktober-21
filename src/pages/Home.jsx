import React from 'react'
import {Menu} from '../components' 
const Home = () => {
    return (
        <div className="home__container">
            <div className="menu__container">
                <Menu/>
            </div>
            <div className="home__body">
                <h2>Welcome to home page</h2>
            </div>

        </div>
    )
}

export default Home
