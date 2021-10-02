import React,{ useContext } from 'react'
import {Menu, VideoChatWindow } from '../components'
import { SocketContext } from '../Context'

const Home = () => {
    const { data1, data2 } = useContext(SocketContext)
    return (
        <div className="home__container">
            <div className="menu__container">
                <Menu/>
            </div>
            <div className="home__body">
                <h2>Welcome to home page</h2>

                {data1} {data2} 

                <div className="videochatwindow">
                    Chat window
                </div>
            </div>
            <div className="chat-sidebar">
                Yet to be created here side chat section with 
            </div>
        </div>
    )
}

export default Home
