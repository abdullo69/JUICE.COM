import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import "./SinglePage1.scss"
import json from "../../../Static-data/StaticData"
import { useEffect } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext'

function SinglePage1() {


    const storedCart = JSON.parse(localStorage.getItem('cart'))
    const { cart, setCart } = useContext(ProductContext)
    console.log(cart)

    const product = useLocation().state
    const [count, setCount] = useState(8)
    const [selectedImage, setSelectedImage] = useState(product.img)

    function incCount() {
        setCount(count + 8)
    }

    function uCount() {
        if (count < 9) {
            setCount(count)
        } else {
            setCount(count - 8)
        }
    }

    function handleImageClick(image) {
        setSelectedImage(image)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])




    return (
        <div>
            <Navbar />
            <div className="sing">
                <div className="sing_img">
                    <div className="img_nav">
                        <div className="img_box">
                            <img src={product.img} alt="" onClick={() => handleImageClick(product.img)} />
                        </div>

                        <div className="img_box">
                            <img src={product.img2} alt="" onClick={() => handleImageClick(product.img2)} />
                        </div>
                    </div>

                    <div className="big_img">
                        <img src={selectedImage} alt="" />
                    </div>
                </div>

                <div className="sing_text">
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    {
                        json.map((json, inx) => {
                            return (
                                <h3>{json.lorem}</h3>
                            )
                        })
                    }

                    <div className='pluss'>
                        <div onClick={uCount} className="plus">-</div>
                        <h1>{count}</h1>
                        <div onClick={incCount} className='plus'>+</div>
                    </div>

                    <div className='text_btn'>
                        <button onClick={() => setCart([...cart, product])}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage1
