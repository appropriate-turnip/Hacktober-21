import React,{useContext} from 'react'
import'./css/VideoChatWindow.css'
import {SocketContext} from '../Context'
const VideoChatWindow = () => {
    // Passing data from contextApi
    const {data1 ,data2} = useContext(SocketContext)
    return (
        <div>
            VideoChatWindow will come here
        </div>
    )
}

export default VideoChatWindow
