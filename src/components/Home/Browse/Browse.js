import React from 'react'
import Vidio from '../Vidio/Vidio'
import "./Browse.scss"
function Browse() {
    return (
        <div>
            <div className="browse">
                <h1>100% plant-based juices Cold Pressed</h1>
                <button>Borwse Flavors</button>
            </div>
            <Vidio />
        </div>
    )
}

export default Browse