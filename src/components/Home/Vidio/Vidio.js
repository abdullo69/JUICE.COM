import React from 'react'
import "./Vidio.scss"
import { BsCameraVideoFill } from "react-icons/bs"
import Check from '../Check/Check'
function Vidio() {
    return (
        <div>
            <div className='vidios'>
                <div className="vidio">
                    <a href="https://youtu.be/YqiZK04TDJY">
                        <div className="vidio_vid">
                            <div className="vidio_icon"><BsCameraVideoFill /></div>
                        </div>
                    </a>
                </div>

                <div className="vidio_text">
                    <p>We’re in business to change lives. Just like we believe in equal access to wellness, we also believe in equal access to education and resources. That’s why we donate 5¢ for every bottle sold to our farming communities, including curriculum material, educator trainings, and quality school facilities. We’re happy to be a part of the B Corporation community and understand the importance of transparency. So, every year we compile a report that shows you exactly where your money is going. We get to see the change your purchase makes on the lives of our farmers and their families, and we think you should too!</p>
                </div>
            </div>
            <Check />
        </div>
    )
}

export default Vidio