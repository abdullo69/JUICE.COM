import React from 'react'
import Navbar from "../../Navbar/Navbar"
import "./Story.scss"
import Escape from '../Escape/Escape'
function Story() {
    return (
        <div>
            <Navbar />

            <div className="story">
                <h1>OUR STORY</h1>
            </div>
            <Escape />
        </div>
    )
}

export default Story