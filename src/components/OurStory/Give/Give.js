import React from 'react'
import "./Give.scss"
import give from "../../../images/give.jpg"
import LetsGo from '../LetsGo/LetsGo'
function Give() {
    return (
        <div>
            <div>
                <div className="give">
                    <div className="give_img">
                        <img src={give} alt="" />
                    </div>

                    <div className="give_text">
                        <div className="give_text_h">
                            <h1>Give Back With Every Bottle
                            </h1>
                            <div className="give_h"></div>
                        </div>
                        <p>
                            We believe in using business as a force for good. For every bottle sold, we donate 5¢ to support local schools, teachers and students in rural Latin America and the Caribbean. Our team works directly with school administrators and teachers to determine the best uses for these funds</p>
                        <div className="give_t"></div>
                    </div>
                </div>
            </div>
            <LetsGo />
        </div>
    )
}

export default Give