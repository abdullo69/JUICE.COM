import React from 'react'
import "./Escape.scss"
import ener from "../../../images/ener.jpg"
import Just from '../Just/Just'
function Escape() {
    return (
        <div>
            <div className="escape">
                <div className="escape_img">
                    <img src={ener} alt="" />
                </div>

                <div className="escape_text">
                    <h1>
                        Escape the ordinary</h1>

                    <p>While living and traveling in South America, founders of Just Made, Walter & Norka Nimocks, encountered a wide variety of tropical fruits.</p> <br />

                    <p>Amazed at the uniqueness of these fruits, they explored their nutritional characteristics and functional properties. Not only were these tropical juices delicious, but they offered superior health benefits.</p><br />

                    <p>A few years later they returned to the United States with a passion for sharing the “secrets of the tropics” with their family, friends and now you!</p> <br />
                </div>
            </div>
            <Just />
        </div>
    )
}

export default Escape