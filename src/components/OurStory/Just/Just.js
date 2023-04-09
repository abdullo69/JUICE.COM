import React from 'react'
import "./Just.scss"
import { BsCameraVideoFill } from "react-icons/bs"
import Made from '../Made/Made'

function Just() {
    return (
        <div>
            <div className="just">
                <a href="https://youtu.be/yM_YCMSp-Ug">
                    <div className='just_icon'>
                        <BsCameraVideoFill />
                    </div></a>
                <h1>JUST MADE</h1>
                <p>THE STORY</p>
            </div>
            <Made />
        </div>
    )
}

export default Just